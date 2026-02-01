$links = @(
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHBPR7SLpAJSOwJn5IamNBkB8O8_QLTj8P001YThMMafCKrptgr7Ft5zHkDOKAdFaszXNSE8MUx4_fp_zO2p_8S2LUnkNbxc8CGAJLi5NrUUuzLSb36jeEk5e5r39HBPz4MuSL6RQ==",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHEZUX95ufAIyovNe2jsrKDkqli1fcH68_qMmfBUTNb6qyVM4EAEzqm7H6F3J5LogbwiHdGKOplclnhJyWH-w0H5B5gXd0NlN3oUAoVuPgfTQQ5WrnZFyXncl1JW18c1omldxoIsmU=",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGPsxFsjmg9lWWQau3ehn_GT7TwkvYRx931WZATZQJPTDedIDXb5u50xmaxeQ3Y3o8qfly32DoaAmVB7KwSzbEu-eUnzxsoiXSYONcce0nlO-5Ci79bgG8ZWGHi4WL_GSUuk8ep4g==",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEonBdMwFHFLqvrTlJyGArcago7uMnNYHDVU7ttTv5SMhFHfjcumOVHnZL_iCbOPMg-1XmEBgarIcTLOr9fRDPbxu7KJ-limpawbjtS6ukFUtW9CBhDYxR9vCXcn_mGBxxq_6Vd5R8=",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE-BpFF9n0QYYQidkdWbTlRI2U1c9Rxwp76TkMc1IZcveheyEyVhhg6ghZinzN7s7WVvsaoOevN9QOHoJDKzzZo9Xn9FcDjQSuVVMWQIMvR0oabK2zra_XQkC4FdqgPTNk2UW3rOpk=",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmcSuNttFQBJBaN22y5YbkZyDpZdq23k9CblDAXjAU-6CEzGbPhisqrN0yKyW6THndvb25S7KTQvKE74xuL--tRfXool6xV3OxbvcvowCvCDoHK-p3RgQODgpcn1iR0Mqd8MpyaS0=",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGqyxCuqaz4Xd7PYZ1lylLqHdKDtkQk4hf-b-0OHx9j-zkok40D04-P3NtiwfJK0fmrb84z5kwX51p1IGYyJ4E-kfBGzGnVMyLdC7h_lFYTEWYKr6KIL1c0N9284pqrd00ebTSWa-8=",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFrJ_Xn46tyu_f3J1WTVJ6XDTnQm-0rFIEZ5xfxbt4uKfnWWEgNHIZfs9kXUcM3wrU1ITtskiy4W5SA3ayH3mwnDhiFcSLV88hkwxGklDEfbV6LvUmck3q0WQbqB6F4zgOmLwEaTZLjw=="
)

foreach ($link in $links) {
    try {
        $req = [System.Net.HttpWebRequest]::Create($link)
        $req.AllowAutoRedirect = $false
        $resp = $req.GetResponse()
        Write-Host "Redirect: $($resp.Headers['Location'])"
        $resp.Close()
    }
    catch {
        Write-Host "Error resolving $link : $_"
    }
}
