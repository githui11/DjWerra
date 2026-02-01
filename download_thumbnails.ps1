$videos = @(
    @{Title="TOP SWAHILI GOSPEL MIX 2026"; Id="a_batUPGh3x4"},
    @{Title="7HM Sessions Ep 5"; Id="wHTBRe6mV-s"},
    @{Title="KIMYA EDITION"; Id="CkhkKACnouka"},
    @{Title="BEST SWAHILI GOSPEL MIX 2026"; Id="GYugXXlf15A"},
    @{Title="BEST SWAHILI GOSPEL MIX 2025 Ep 3"; Id="09LXdeNP7Ek"},
    @{Title="Praise Atmosphere S1 E2"; Id="onBdMwFHFLq"},
    @{Title="Praise Atmosphere S1 E1"; Id="EZUX95ufAIy"},
    @{Title="Throwback Edition"; Id="FeuePEG0iAc"},
    @{Title="BEST GOSPEL REGGAE WORSHIP"; Id="GAOyJXGAXoY"},
    @{Title="SHUSHA NYAVU EDITION"; Id="SWAHILI_WORSHIP"}, # Placeholder ID
    @{Title="BEST OF LIVE SWAHILI PRAISE SET 1"; Id="GxBo6ShMVZf"},
    @{Title="BEST SWAHILI GOSPEL MIX 2026 LIVE"; Id="mcSuNttFQBJ"},
    @{Title="AMEFANYA MUNGU SWAHILI GOSPEL"; Id="onBdMwFHFLq"}, # Duplicate checked
    @{Title="BEST SWAHILI PRAISE & WORSHIP MIX THROWBACK"; Id="FeuePEG0iAc"} # Duplicate checked
)

$destDir = "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

foreach ($v in $videos) {
    $url = "https://img.youtube.com/vi/$($v.Id)/maxresdefault.jpg"
    $filename = "$($v.Id).jpg"
    $path = Join-Path $destDir $filename
    try {
        Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction Stop
        Write-Host "Downloaded $($v.Title)"
    } catch {
        # Fallback to hqdefault if maxres not available
        $url = "https://img.youtube.com/vi/$($v.Id)/hqdefault.jpg"
        try {
            Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction SilentlyContinue
            Write-Host "Downloaded HQ for $($v.Title)"
        } catch {
            Write-Host "Failed to download $($v.Title)"
        }
    }
}
