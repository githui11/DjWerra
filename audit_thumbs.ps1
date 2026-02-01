$ids = @(
    "8JNcxlNjV2E", # Top 2026
    "o7VtTIpf218", # Kimya
    "wVfaWSukNlg", # Live Praise
    "DF5BvTmhMYQ", # Reggae 2
    "ev7U4Ycvj2w", # Throwback
    "z5f1N1l111E", # Set 2 (Check one more time)
    "uekQikG1XDQ"  # Praise E1 (Check one more time)
)

$dir = "c:\Users\Admin\OneDrive\Desktop\Client Websites\dj-werra-website\public\assets\thumbnails"
Write-Host "Checking thumbnails in $dir"

foreach ($id in $ids) {
    $path = Join-Path $dir "$id.jpg"
    if (Test-Path $path) {
        $item = Get-Item $path
        if ($item.Length -gt 0) {
            Write-Host "VERIFIED: $id ($($item.Length) bytes)"
        }
        else {
            Write-Host "EMPTY: $id (0 bytes)"
        }
    }
    else {
        Write-Host "MISSING: $id"
    }
}
