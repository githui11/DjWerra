import os
import requests
import time

# List of Video IDs and Titles (will be populated/expanded)
videos = [
    # Confirmed from previous steps
    {"id": "8JNcxlNjV2E", "title": "Top Swahili 2026"},
    {"id": "o7VtTIpf218", "title": "Kimya Edition"},
    {"id": "wVfaWSukNlg", "title": "Live Praise 2026"},
    {"id": "DF5BvTmhMYQ", "title": "Reggae Vol 2"},
    {"id": "ev7U4Ycvj2w", "title": "Throwback"},
    {"id": "z5f1N1l111E", "title": "Set 2"},
    {"id": "ohOaG8mxOAc", "title": "Shusha Nyavu"},
    {"id": "g_2B6-qZl7E", "title": "7HM Ep 5"},
    {"id": "uekQikG1XDQ", "title": "Praise S1 E1"},
    {"id": "onBdMwFHFLq", "title": "Praise S1 E2"},
    {"id": "09LXdeNP7Ek", "title": "Ep 3"},
    {"id": "GxBo6ShMVZf", "title": "Set 1"},
    {"id": "kF6_zED-x8P", "title": "Blend 4"},
    # Fallback/New IDs will be added here manually after scrape
]

DEST_DIR = r"c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"
if not os.path.exists(DEST_DIR):
    os.makedirs(DEST_DIR)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Referer": "https://www.youtube.com/"
}

def download_thumb(video_id):
    path = os.path.join(DEST_DIR, f"{video_id}.jpg")
    
    # Try maxres, then hq, then mq
    qualities = ["maxresdefault", "hqdefault", "mqdefault"]
    
    for q in qualities:
        url = f"https://img.youtube.com/vi/{video_id}/{q}.jpg"
        print(f"Trying {url}...")
        try:
            r = requests.get(url, headers=HEADERS, timeout=10)
            if r.status_code == 200:
                with open(path, "wb") as f:
                    f.write(r.content)
                print(f"SUCCESS: {video_id} using {q}")
                return True
            else:
                print(f"Failed {q}: {r.status_code}")
        except Exception as e:
            print(f"Error {q}: {e}")
            
    return False

# Download
for v in videos:
    print(f"Processing {v['title']} ({v['id']})...")
    if not download_thumb(v['id']):
        print(f"FAILED ALL for {v['id']}")
