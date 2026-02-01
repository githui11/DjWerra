$validVideos = @(
    @{Id = "o7VtTIpf218"; Title = "Kimya Edition" },
    @{Id = "uekQikG1XDQ"; Title = "Praise S1 E1" },
    @{Id = "DF5BvTmhMYQ"; Title = "Reggae Worship" },
    @{Id = "8JNcxlNjV2E"; Title = "Top Swahili 2026" },
    @{Id = "wVfaWSukNlg"; Title = "Live Swahili 2025" },
    @{Id = "ev7U4Ycvj2w"; Title = "Throwback Edition" }
)

$destDir = "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"
# Ensure dir exists
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir }

foreach ($v in $validVideos) {
    $url = "https://img.youtube.com/vi/$($v.Id)/maxresdefault.jpg"
    $path = Join-Path $destDir "$($v.Id).jpg"
    try {
        Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction Stop
        Write-Host "Downloaded: $($v.Title)"
    }
    catch {
        # Try HQ fallback
        $url = "https://img.youtube.com/vi/$($v.Id)/hqdefault.jpg"
        try {
            Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction Stop
            Write-Host "Downloaded HQ: $($v.Title)"
        }
        catch {
            Write-Host "Failed: $($v.Title)"
        }
    }
}
