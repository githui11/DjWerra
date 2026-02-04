import json
import os
import subprocess

# Channel URL
CHANNEL_URL = "https://www.youtube.com/@dj_werra254/videos"

def fetch_channel_videos():
    print(f"Fetching videos from {CHANNEL_URL}...")
    
    # Command to get all videos in JSON format
    # Using yt-dlp which is robust against changes in YouTube's structure
    # Installing: pip install yt-dlp
    
    # Try running as module to avoid PATH issues
    import sys
    cmd = [
        sys.executable, "-m", "yt_dlp",
        "--dump-single-json",
        "--flat-playlist",  # Don't download videos, just metadata
        CHANNEL_URL
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        data = json.loads(result.stdout)
        
        videos = []
        if 'entries' in data:
            for entry in data['entries']:
                # Filter out shorts if needed, but for now keep everything
                # Shorts usually have durations < 60s, but let's just grab main videos
                # or rely on manual filtering later. 
                # Ideally, we look at 'duration' or 'title' to filter.
                
                video_data = {
                    'id': entry.get('id'),
                    'title': entry.get('title'),
                    'url': entry.get('url'),
                    'thumbnail': entry.get('thumbnail'), # URL to thumbnail
                    'description': entry.get('description', ''),
                    'duration': entry.get('duration')
                }
                videos.append(video_data)
        
        return videos
        
    except subprocess.CalledProcessError as e:
        print(f"Error fetching channel data: {e}")
        return []
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON output: {e}")
        return []
    except FileNotFoundError:
        print("yt-dlp not found. Please install it with 'pip install yt-dlp'.")
        return []

if __name__ == "__main__":
    videos = fetch_channel_videos()
    
    if videos:
        print(f"Found {len(videos)} videos.")
        
        # Save to file
        output_path = os.path.join(os.path.dirname(__file__), "channel_videos.json")
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(videos, f, indent=4)
        
        print(f"Saved metadata to {output_path}")
    else:
        print("No videos found or error occurred.")
