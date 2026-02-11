# DJ Werra Website - Content Management Handover Guide

## Overview

Your website now includes a **Content Management System (CMS)** that allows you to upload and manage your mixes, videos, and audio files without any coding.

You will use **Sanity Studio** - a simple web interface where you can:
- Upload new videos and audio files
- Add YouTube video links
- Edit titles and descriptions
- Delete old content

---

## Initial Setup (One-Time Only)

### Step 1: Create Your Sanity Account

1. Go to [https://www.sanity.io](https://www.sanity.io)
2. Click **"Get Started"** and sign up (you can use Google login)
3. It's **FREE** for personal use (up to 3 users, 10GB storage)

### Step 2: Create a New Project

1. After logging in, go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Click **"Create new project"**
3. Name it: `DJ Werra Website`
4. For dataset, keep it as `production`
5. Click **Create Project**

### Step 3: Get Your Project ID

1. After creating the project, you'll see a **Project ID** (looks like: `abc123xyz`)
2. Copy this ID - you'll need it for the next step

### Step 4: Add Environment Variables

**For Local Development:**
1. Create a file called `.env.local` in the `dj-werra-website` folder
2. Add this content (replace with your actual project ID):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**For Vercel (Production):**
1. Go to your Vercel dashboard
2. Select the DJ Werra project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = production

### Step 5: Configure CORS (Allow Your Website)

1. In [Sanity Manage](https://www.sanity.io/manage), select your project
2. Go to **API** → **CORS origins**
3. Add these URLs:
   - `http://localhost:3000` (for local testing)
   - Your live website URL (e.g., `https://djwerra.com`)
   - Check "Allow credentials" for each

### Step 6: Redeploy Your Website

After adding the environment variables, redeploy on Vercel:
```bash
npx vercel --prod
```

---

## Using Sanity Studio (Your Content Dashboard)

### Accessing the Studio

Once set up, you can access your content manager at:
```
https://your-website.com/studio
```

Or when developing locally:
```
http://localhost:3000/studio
```

### Adding a New Mix

1. Go to `/studio` on your website
2. Click **"Mix"** in the left sidebar
3. Click the **"+"** button to create a new mix
4. Fill in the details:
   - **Title**: Name of your mix
   - **Description**: Short description
   - **Mix Type**: Choose one:
     - **YouTube Video**: For YouTube links
     - **Uploaded Video**: For video files you upload
     - **Uploaded Audio**: For audio/MP3 files
5. Based on your choice:
   - For YouTube: Paste the full YouTube URL
   - For Video/Audio: Click to upload your file
6. Optionally add a **Thumbnail Image** (cover art)
7. Check **Featured** if you want it highlighted
8. Click **Publish** in the bottom right

### Editing Existing Content

1. Go to `/studio`
2. Click **"Mix"** in the sidebar
3. Select the mix you want to edit
4. Make your changes
5. Click **Publish**

### Deleting Content

1. Go to `/studio`
2. Select the mix to delete
3. Click the **"..."** menu in the top right
4. Select **"Delete"**
5. Confirm deletion

---

## File Upload Limits

Sanity's free tier includes:
- **10GB storage** for files
- **100GB bandwidth/month**

This is plenty for a DJ website. If you need more, Sanity has affordable paid plans.

### Recommended File Sizes
- **Videos**: Compress to under 500MB each (use HandBrake or similar)
- **Audio**: MP3 at 320kbps is ideal
- **Thumbnails**: 1280x720 JPEG/PNG

---

## Troubleshooting

### "Mixes not showing up"
1. Make sure you clicked **Publish** (not just saved as draft)
2. Wait 1-2 minutes for the CDN to update
3. Refresh your website

### "Can't access /studio"
1. Check that CORS is configured correctly
2. Make sure environment variables are set
3. Verify the website was redeployed after adding env vars

### "Upload failed"
1. Check file size (keep videos under 500MB)
2. Check your internet connection
3. Try a different browser

---

## Support

If you have issues:
1. Check this guide first
2. Contact your developer (me) for technical issues
3. Sanity has great documentation: [https://www.sanity.io/docs](https://www.sanity.io/docs)

---

## Quick Reference

| Task | How To Do It |
|------|--------------|
| Add new mix | Go to `/studio` → Mix → Create new |
| Edit mix | Go to `/studio` → Select mix → Edit → Publish |
| Delete mix | Select mix → ... menu → Delete |
| Add YouTube video | Create mix → Select "YouTube" → Paste URL |
| Upload video file | Create mix → Select "Video" → Upload file |
| Upload audio file | Create mix → Select "Audio" → Upload file |

---

**You're all set!** Your website will automatically display any content you add through Sanity Studio.
