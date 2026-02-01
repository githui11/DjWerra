$links = @(
    @{Title = "Shusha Nyavu"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG0MB6mnnrgnNCGhD8iwLojidMJ5Tho9x0OUqNiO9-zMMsGob5eI6xL0fFJFVXrfBHCem5AE2C7XFNNfG6rwOHIg90mrrUkJXPy0KNgKrwBouOIc5bBhEkgvAcoc-y7WDARLsB_Kw==" },
    @{Title = "7HM Ep 5"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQECglyrbw815cIhnWPlEbX9Cjr-LBU_FgkpE110Aak70Y8FILN11SFQ8zGPYXfsVSrKWPyed-wU4GpMY21H9fQWU7jrbBEktLzPoXq6mg1VfehFKAeU0-oCrg1AlvN99oltQNvKdQ==" },
    @{Title = "Best Live Set 1"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElJ9-XdLTDfgroXKzIkpmZW2EgcJdEPF-qwk8T-3ygeIixwbdlH7RIEx8nsjOxGvLfb34_vBH58qQv3uduYlfA2mq_VZGHdXJTw2JrSdjeBg7tVKRCL-VkQvtiZXtxGQ4fw7GZEA==" },
    @{Title = "Best Live Set 2"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE6mHqBz-m3EAkRxWMEPBkubnIC9IecQDmDu-lgjywNO5xqRGiQOVzHMabIJovXKWoo_bWwROz523gU8tto1UlNjitmRmZLCGRHiu5MJgI5CYky8VLe3u00gYbS5uJZ9cpb0klczVQ=" },
    @{Title = "East Africa Vol 3"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErZ2KsWkpjxbR1izKOLfGSqNbxHZUN818FrYr-zUrinZTls7Ri8MB74ho9TpxKlBbF6QRE9mEDxkdMz6ncX8PuVMpvYYq4bclJID4okte11zDHCW1D7YDtgZ_I8PC5sYN7cooGKDg=" },
    @{Title = "Reggae Vol 2"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFOIu9U1Jaz4mwMtFgokqQqy-xD4NoTz_neKFQIWoqtTow6Qd2FJmSsuwDXayKRPCKmao2I8T6jXR6E10xtzRY4nsA8SHxHdJOrSvDQFvGR_D3OPnqRjISDedL61x_LHDMQqsU2OQ==" }
)

foreach ($item in $links) {
    try {
        $req = [System.Net.HttpWebRequest]::Create($item.Url)
        $req.AllowAutoRedirect = $false
        $resp = $req.GetResponse()
        $loc = $resp.Headers['Location']
        if ($loc -match "v=([a-zA-Z0-9_-]{11})") {
            Write-Host "FOUND: $($item.Title) | ID: $($matches[1])"
        }
        else {
            Write-Host "RESOLVED: $($item.Title) | Location: $loc"
        }
        $resp.Close()
    }
    catch {
        if ($_.Exception.Response) {
            $loc = $_.Exception.Response.Headers['Location']
            if ($loc -match "v=([a-zA-Z0-9_-]{11})") {
                Write-Host "FOUND: $($item.Title) | ID: $($matches[1])"
            }
            else {
                Write-Host "ERROR: $($item.Title) | $_"
            }
        }
        else {
            Write-Host "ERROR: $($item.Title) | $_"
        }
    }
}
