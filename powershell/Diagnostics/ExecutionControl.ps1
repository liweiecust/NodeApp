Set-ExecutionPolicy -ExecutionPolicy Unrestricted
Start-Process .\powershell -Verb runas -PassThru
$sARTUri='http://HQQAEBLADE710.qae.aspentech.com:3000'
while($true)
{
    try {
        iex ((New-Object System.Net.WebClient).DownloadString("$sARTUri/api/ps/ARTLibrary.ps1"))
        iex ((New-Object System.Net.WebClient).DownloadString("$sARTUri/api/ps/Library.ps1"))
        
        break
    }
    catch {
        
    }
}
function Execute($testcase,$dllPath)
{
    Write-Host "start to execute $testcase."
    &$vsconsole $dllPath /Tests:$testcase /logger:trx /InIsolation  
}
$services = "Tomcat8", "CimTskSrvgroup200", "AtDsaDirectory", "Aspen Process Data Service", "CalculatorServerService",  
             "AspenTechDAWSServerService", "MSSQLSERVER", 'MSSQL$SQLEXPRESS','IISADMIN'

$vsconsole=Get-MSTestPath

$P4_Work_Space_Folder = "c:\p4"
$directory = "C:\p4\qe\dev\AUTOMATION\Process Explorer\A1PE-MVT Configuration"
$slnPath= Join-path $directory -ChildPath "\A1PE-MVT Configuration.sln"
$sInstallerPath="//depot/qe/dev/AUTOMATION/Process Explorer/A1PE-MVT Configuration"
$dllPath=$directory+"\ARTbuild\A1PE-MVT Configuration.dll"
$blueprint="MES MVT"
$P4_Username=Load-Setting -sARTServerUri $sARTUri -project $blueprint -key P4_Username
$P4_Password=Load-Setting -sARTServerUri $sARTUri -project $blueprint -key P4_Password

Write-Host "Hello, Welcome!" -Verbose
Write-Host "Hey, What a good day! Happy testing!"

$webClient=(New-Object -TypeName System.Net.WebClient)
$options=$webClient.DownloadString("http://10.148.68.58:3000/api/ps/configurations/all").Split(",")
$ExecutionQueue=@{}
for($i=0;$i-lt $options.Count;$i++)
{
    $ExecutionQueue.Add($i,$options[$i])
}
Write-Host $ExecutionQueue
Write-Host "We have following configuration scripts"
for($i=0;$i -lt $ExecutionQueue.Count;$i++)
{
    Write-Host "        " $i. $ExecutionQueue[$i] -ForegroundColor Yellow 
}
Write-Host "*************************************"
$Queue=(Read-Host "input the configurations you want to have").Split(",")

while($true)
{
    $b=$true;
    foreach($case in $Queue)
    {
        if(-not($ExecutionQueue.Contains([int]$case)))
        {
            Write-Host "$case is not recognized as the script name. Please enter a valid choice."
            $b=$false;
            break;
        }
    }
    if($b)
    {
        break;
    }
    else
    {
        $Queue=@();
        $Queue=Read-Host "input the configurations you want to have";
    }
   
}
Write-Host "script check passed."
Write-Host "Generating testing plan."


if(-not(Test-Path  -Path $slnPath))
{
    Write-Host "Start to sync files from P4"
    Sync-FromP4 -P4_Location_List @($sInstallerPath) -P4_User $P4_Username -P4_Server hqperforce2.corp.aspentech.com:1666 -P4_PASSWORD $P4_Password -P4_Work_Space_Folder $P4_Work_Space_Folder -P4_Work_Space_Name ART

}
Build-Project -msBuild "" -slnPath $slnPath -rebuild -CompressOutput -sARTUri $sARTUri
foreach($case in $Queue)
{
    Write-Host "Starting execution $case"
    $case=$ExecutionQueue[[int]$case]
    Execute -testcase $case -dllPath $dllPath
}
