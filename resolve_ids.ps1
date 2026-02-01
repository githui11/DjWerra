$links = @(
    @{Title = "Kimya"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHBPR7SLpAJSOwJn5IamNBkB8O8_QLTj8P001YThMMafCKrptgr7Ft5zHkDOKAdFaszXNSE8MUx4_fp_zO2p_8S2LUnkNbxc8CGAJLi5NrUUuzLSb36jeEk5e5r39HBPz4MuSL6RQ==" },
    @{Title = "Praise S1 E1"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEZUX95ufAIyovNe2jsrKDkqli1fcH68_qMmfBUTNb6qyVM4EAEzqm7H6F3J5LogbwiHdGKOplclnhJyWH-w0H5B5gXd0NlN3oUAoVuPgfTQQ5WrnZFyXncl1JW18c1omldxoIsmU=" },
    @{Title = "Praise S1 E2"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEonBdMwFHFLqvrTlJyGArcago7uMnNYHDVU7ttTv5SMhFHfjcumOVHnZL_iCbOPMg-1XmEBgarIcTLOr9fRDPbxu7KJ-limpawbjtS6ukFUtW9CBhDYxR9vCXcn_mGBxxq_6Vd5R8=" },
    @{Title = "Praise S1 E3"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE-BpFF9n0QYYQidkdWbTlRI2U1c9Rxwp76TkMc1IZcveheyEyVhhg6ghZinzN7s7WVvsaoOevN9QOHoJDKzzZo9Xn9FcDjQSuVVMWQIMvR0oabK2zra_XQkC4FdqgPTNk2UW3rOpk=" },
    @{Title = "7HM Sessions"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2FDJOcvX3KaoPtgZ3ukGfg1XKw4GFmEHuDYo0xwE9m3l3IyMtXtlr6QbIixgf3CKqGGlb3wYlkHdUpBf3bouCp5emB7nbpyEhCcnfm89-Uh1NE_kz0u-004g28N4_u6bYOGaTk1Y=" },
    @{Title = "Reggae"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKgTZHpgXqO7-XFKgsVFbNfCcPBQqxe-3_D9rvI28-D0h7o2tBUW9eQZvP7sRLrDV6EaP5KV_jfxe0R7n6hmt3qaeclftq2TSIEQxYjrm_8BWG-DFHyVRPLWeGv9jhTHsw9P8enXo=" },
    @{Title = "Top 2026"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEVolm-NgQavieJw4XPUnv2WA3cZCieNlik0H3gcHsJ7z_i2Y1ulOp2do8fVGCQp6RG_SHomUgmEl9V5_89jZRxJSt_E3QxzgeFc1bWilsNv2LDUMqbn5OsTcwVDZJ9HfvKgtoQxQ==
"
    },
    @{Title = "Live 2025"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGxBo6ShMVZf_q5dzSDqaQt3_MgaM2YGJ_gGiURbhQDLSS7zJyqoBSwOdMz0_kYYnoY-fA5BMNimKLmuInEdmWilNGnNkmARweBucazLs5veVeLdPuxnTztdkTeig12pbcYwnzbq2E=" },
    @{Title = "Throwback"; Url = "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFEuePEG0iActR6D2mwlfhsMGAvDEp_vK8uuUvye-qwlTQjbdkve1Hs23Ni8h2diWP8oHz8q_P6vczHrezxHSTVHQdHz6MoOcYOkYb4yI4fYRHs89DTfKPCzfY9t8eQLctNojwgPBs=" }
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
        Write-Host "ERROR: $($item.Title) | $_"
    }
}
