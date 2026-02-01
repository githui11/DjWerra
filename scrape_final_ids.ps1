$queries = @(
    "DJ Werra Praise Atmosphere S1 E1",
    "DJ Werra Praise Atmosphere S1 E2",
    "DJ Werra Praise Atmosphere S1 E3",
    "DJ Werra Best Swahili Gospel Mix 2025 Ep 3",
    "DJ Werra Reggae Worship Vol 1",
    "DJ Werra Swahili Worship Vol 4",
    "DJ Werra Nairobi Street Vibes Ep 1",
    "DJ Werra Urban Gospel Mix 2024",
    "DJ Werra Mungu Kwanza",
    "DJ Werra Kugangua Agano"
)

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

foreach ($q in $queries) {
    $url = "https://www.youtube.com/results?search_query=" + [Uri]::EscapeDataString($q)
    try {
        $html = $wc.DownloadString($url)
        # Regex for videoId - try multiple patterns
        if ($html -match 'videoId":"([a-zA-Z0-9_-]{11})"') {
            $id = $matches[1]
            Write-Host "FOUND: $q -> $id"
        }
        else {
            Write-Host "NO MATCH: $q"
        }
    }
    catch {
        Write-Host "ERROR: $q"
    }
    Start-Sleep -Milliseconds 500
}
