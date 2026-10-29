// Returns live YouTube subscriber counts. API key stays secret in Netlify env var YOUTUBE_API_KEY.
exports.handler = async (event) => {
  const key = process.env.YOUTUBE_API_KEY;
  const handles = (event.queryStringParameters?.handles || "")
    .split(",").map(h => h.trim()).filter(h => /^@[\w.\-]{3,30}$/.test(h)).slice(0, 5);
  const headers = { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" };
  if (!key || !handles.length) return { statusCode: 200, headers, body: "{}" };
  const out = {};
  await Promise.all(handles.map(async (h) => {
    try {
      const r = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${encodeURIComponent(h)}&key=${key}`);
      const j = await r.json();
      const s = j.items?.[0]?.statistics;
      if (s && !s.hiddenSubscriberCount) out[h] = Number(s.subscriberCount);
    } catch (e) {}
  }));
  return { statusCode: 200, headers, body: JSON.stringify(out) };
};
