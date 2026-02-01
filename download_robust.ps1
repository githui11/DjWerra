$mixes = @(
    "8JNcxlNjV2E", # Top 2026 (Downloaded)
    "o7VtTIpf218", # Kimya (Downloaded)
    "wVfaWSukNlg", # Live Praise (Downloaded)
    "uekQikG1XDQ", # Praise S1 E1 (Failed) -> try mq
    "onBdMwFHFLq", # Praise S1 E2 (Failed)
    "09LXdeNP7Ek", # Ep 3 (Failed)
    "GxBo6ShMVZf", # Set 1 (Failed)
    "OQvHMq_WwRO", # Set 2 (Verified ID, try mq)
    "ohOaG8mxOAc", # Shusha Nyavu (Verified ID, try mq)
    "DF5BvTmhMYQ", # Reggae 2 (Verified ID, try mq)
    "ev7U4Ycvj2w", # Throwback (Downloaded)
    "kF6_zED-x8P", # Blend 4 (Failed)
    "g_2B6-qZl7E"  # 7HM Ep 5 (Verified, try mq)
)

$destDir = "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

foreach ($id in $mixes) {
    $path = Join-Path $destDir "$id.jpg"
    if (Test-Path $path) { 
        Write-Host "Exists: $id" 
        continue
    }

    # Quality hierarchy
    $qualities = @("maxresdefault", "hqdefault", "mqdefault", "sddefault", "default")
    
    foreach ($q in $qualities) {
        $url = "https://img.youtube.com/vi/$id/$q.jpg"
        try {
            $wc.DownloadFile($url, $path)
            Write-Host "SUCCESS: $id ($q)"
            break
        }
        catch {
            # Continue to next quality
        }
    }
    
    if (!(Test-Path $path)) { Write-Host "FAILED ALL: $id" }
}
