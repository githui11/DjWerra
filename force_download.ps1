$mixes = @(
    "8JNcxlNjV2E", "o7VtTIpf218", "wVfaWSukNlg", "uekQikG1XDQ", 
    "onBdMwFHFLq", "09LXdeNP7Ek", "GxBo6ShMVZf", "OQvHMq_WwRO", 
    "ohOaG8mxOAc", "DF5BvTmhMYQ", "ev7U4Ycvj2w", "kF6_zED-x8P", "g_2B6-qZl7E"
)
$destDir = "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir }

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")

foreach ($id in $mixes) {
    $path = Join-Path $destDir "$id.jpg"
    $url = "https://img.youtube.com/vi/$id/hqdefault.jpg"
    try {
        $wc.DownloadFile($url, $path)
        Write-Host "SUCCESS: $id"
    }
    catch {
        Write-Host "FAIL: $id - $($_.Exception.Message)"
    }
}
