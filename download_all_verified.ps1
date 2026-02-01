$mixes = @(
    "8JNcxlNjV2E", # Top Swahili 2026
    "o7VtTIpf218", # Kimya Edition
    "wVfaWSukNlg", # Live Praise 2026
    "uekQikG1XDQ", # Praise S1 E1
    "onBdMwFHFLq", # Praise S1 E2
    "09LXdeNP7Ek", # Ep 3
    "GxBo6ShMVZf", # Set 1
    "OQvHMq_WwRO", # Set 2
    "ohOaG8mxOAc", # Shusha Nyavu
    "DF5BvTmhMYQ", # Reggae Vol 2
    "ev7U4Ycvj2w", # Throwback
    "kF6_zED-x8P", # Blend 4
    "g_2B6-qZl7E"  # 7HM Ep 5
)

$destDir = "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir }

foreach ($id in $mixes) {
    $path = Join-Path $destDir "$id.jpg"
    # Try maxres first, then hq
    $urlMax = "https://img.youtube.com/vi/$id/maxresdefault.jpg"
    $urlHq = "https://img.youtube.com/vi/$id/hqdefault.jpg"
    
    try {
        Invoke-WebRequest -Uri $urlMax -OutFile $path -ErrorAction Stop
        Write-Host "Downloaded MAX: $id"
    }
    catch {
        try {
            Invoke-WebRequest -Uri $urlHq -OutFile $path -ErrorAction Stop
            Write-Host "Downloaded HQ: $id"
        }
        catch {
            Write-Host "FAILED: $id"
        }
    }
}
