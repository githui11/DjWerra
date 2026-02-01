$newVideos = @(
    @{Id = "ohOaG8mxOAc"; Title = "Shusha Nyavu" },
    @{Id = "g_2B6-qZl7E"; Title = "7HM Ep 5" },
    @{Id = "OQvHMq_WwRO"; Title = "Best Live Set 2" },
    @{Id = "kF6_zED-x8P"; Title = "East Africa Vol 3" }
)

$destDir = "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"

foreach ($v in $newVideos) {
    $url = "https://img.youtube.com/vi/$($v.Id)/maxresdefault.jpg"
    $path = Join-Path $destDir "$($v.Id).jpg"
    try {
        Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction Stop
        Write-Host "Downloaded: $($v.Title)"
    }
    catch {
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
