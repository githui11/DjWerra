$queries = @(
    "DJ Werra Set 1",
    "DJ Werra Praise Atmosphere S1 E1",
    "DJ Werra Praise Atmosphere S1 E2",
    "DJ Werra 7HM Ep 5",
    "DJ Werra Shusha Nyavu"
)

foreach ($q in $queries) {
    $url = "https://www.youtube.com/results?search_query=" + [Uri]::EscapeDataString($q)
    try {
        # Use simple web client with mobile UA sometimes gets simpler HTML
        $wc = New-Object System.Net.WebClient
        $wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
        $html = $wc.DownloadString($url)
        
        # Regex for videoId
        if ($html -match 'videoId":"([a-zA-Z0-9_-]{11})"') {
            $id = $matches[1]
            Write-Host "FOUND: $q -> $id"
        }
        else {
            Write-Host "NO MATCH: $q"
        }
    }
    catch {
        Write-Host "ERROR: $q - $($_.Exception.Message)"
    }
}
