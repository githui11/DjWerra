$url = "https://www.youtube.com/@dj_werra254/videos"
# User agent to ensure we get desktop/mobile site content
$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

try {
    $content = (Invoke-WebRequest -Uri $url -UserAgent $userAgent).Content
    # Pattern to find video IDs in the raw HTML script data
    $matches = [regex]::Matches($content, '"videoId":"([a-zA-Z0-9_-]{11})"')
    $ids = $matches | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
    
    # Filter out common false positives if any (though regex is specific)
    $validIds = $ids | Where-Object { $_ -ne "videoId" }

    Write-Host "Found $($validIds.Count) unique video IDs:"
    $validIds | ForEach-Object { Write-Host $_ }
    
    # Save to file for next step
    $validIds | Out-File "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\extracted_ids.txt"
}
catch {
    Write-Host "Error scraping: $_"
}
