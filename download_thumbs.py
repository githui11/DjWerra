import os
import requests
import time

# List of Video IDs and Titles (will be populated/expanded)
videos = [
    {"id": "8JNcxlNjV2E", "title": "Top Swahili 2026"},
    {"id": "1quNbPJ8DQw", "title": "7HM Ep 5"},
    {"id": "o7VtTIpf218", "title": "Kimya Edition"},
    {"id": "MI8JAmnmbSI", "title": "Live Praise 2026"},
    {"id": "x8UwVXcjE0A", "title": "Ep 3"},
    {"id": "iUBzKrWxW40", "title": "Praise S1 E2"},
    {"id": "uekQikG1XF4", "title": "Praise S1 E1"},
    {"id": "W0o9YPrAK7A", "title": "Set 3"},
    {"id": "WrDzaY4-yAI", "title": "Set 2"},
    {"id": "DF5BvTmhMYQ", "title": "Reggae Vol 2"},
    {"id": "8yyyFfP5wDs", "title": "East Africa Vol 3"},
    {"id": "wVfaWSukNlg", "title": "Set 1"},
    {"id": "ev7U4Ycvj2w", "title": "Throwback"},
    {"id": "YZFqDp-6UvY", "title": "Wapendwa Muziki"},
    {"id": "ohOaG8mxOGU", "title": "Shusha Nyavu"},
    {"id": "qNAOrNogk2o", "title": "Blend 4"},
    {"id": "L4MqHAW7GFA", "title": "Blend 3"},
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
