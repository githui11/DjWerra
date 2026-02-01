$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0")
try {
    $wc.DownloadFile("https://img.youtube.com/vi/z5f1N1l111E/hqdefault.jpg", "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails\z5f1N1l111E.jpg")
    Write-Host "SUCCESS"
}
catch {
    Write-Host "FAIL: $($_.Exception.Message)"
}
