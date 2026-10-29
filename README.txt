ONE-TIME SETUP (about 10 minutes)
1. Create a free GitHub account, make a new repository, and upload everything in this folder
   (index.html, data/, media/, .pages.yml) to it.
2. Netlify > Add new site > Import from Git > pick that repository > Deploy.
   From now on Netlify republishes automatically whenever the repository changes.
3. Go to https://app.pagescms.org > Sign in with GitHub > install the GitHub App > open your repository.
4. Click "Website content". Edit text, paste reel/vlog links, upload photos, then Save.
   Your site updates in about a minute. No re-deploying.

NOTES
- Lists show newest-last: add a new reel/vlog/photo at the bottom and it appears first on the site.
- Uploaded images are stored in the media folder automatically.
- The site must be opened through Netlify (or a local server), not by double-clicking index.html.

AUTOMATIC YOUTUBE SUBSCRIBER COUNTS (one-time)
1. console.cloud.google.com > create a project > APIs & Services > Library > enable "YouTube Data API v3".
2. Credentials > Create credentials > API key. Copy it.
3. Netlify > your site > Site configuration > Environment variables > add YOUTUBE_API_KEY = your key. Then Deploys > Trigger deploy.
4. Counts for @UnfilteredAngara and @Poetic.angara now update by themselves (refreshed hourly).
Instagram followers stay manual: edit the number in the CMS under Stats.
