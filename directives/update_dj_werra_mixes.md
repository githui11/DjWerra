# Update DJ Werra Mixes

This directive outlines the process for updating the mixes page on the DJ Werra website when new videos are uploaded to the YouTube channel.

## Prerequisites
- Python installed
- `yt-dlp` installed (`pip install yt-dlp`)
- Git access to the repository

## Steps

1. **Fetch Latest Channel Data**
   Run the fetch script to get the latest video metadata from YouTube.
   ```bash
   python execution/fetch_youtube_channel.py
   ```
   This will generate `execution/channel_videos.json`.

2. **Download Thumbnails**
   Run the download script to fetch thumbnails for all videos found in the JSON file.
   ```bash
   python execution/download_thumbnails.py
   ```
   This saves thumbnails to `public/assets/thumbnails/`.

3. **Verify Assets**
   Check that new thumbnails are present in `public/assets/thumbnails/`.
   ```bash
   git status
   ```
   You should see untracked files if new videos were added.

4. **Update Frontend (Optional)**
   If there are new videos that need to be displayed on the `mixes` page, update `app/mixes/page.tsx`.
   - You can use the data in `execution/channel_videos.json` as a reference for IDs and Titles.
   - *Future improvement: Make page.tsx load from a JSON file directly.*

5. **Commit and Deploy**
   Commit the new assets and any code changes.
   ```bash
   git add public/assets/thumbnails/ execution/channel_videos.json
   git commit -m "chore: update mixes content"
   git push
   ```
