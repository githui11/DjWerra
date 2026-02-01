$queries = @(
    "DJ Werra Kugangua Agano",
    "DJ Werra Swahili Worship Vol 4",
    "DJ Werra Urban Gospel Mix 2024",
    "DJ Werra Best of Rose Muhando Special",
    "DJ Werra Mungu Kwanza Edition",
    "DJ Werra Nairobi Street Vibes Ep 1",
    "DJ Werra Praise Atmosphere S1 E3",
    "DJ Werra Praise Atmosphere S1 E1", 
    "DJ Werra Best Of Live Swahili Praise Set 1",
    "DJ Werra Reggae Worship Vol 1"
)

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")

foreach ($q in $queries) {
    $url = "https://www.youtube.com/results?search_query=" + [Uri]::EscapeDataString($q)
    try {
        $html = $wc.DownloadString($url)
        if ($html -match 'videoId":"([a-zA-Z0-9_-]{11})"') {
            $id = $matches[1]
            Write-Host "FOUND: $q -> $id"
        }
        else {
            Write-Host "NO MATCH: $q"
        }
    }
    catch {
        Write-Host "ERROR: $q -> $($_.Exception.Message)"
    }
    Start-Sleep -Milliseconds 1000
}
