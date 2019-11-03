xcopy /R /Y /E /I /D "C:\p4\qe\dev\Automation\Process Explorer\A1PE-MVT Configuration\A1PE-MVT Configuration\Model\KPI\*" "C:\Program Files\AspenTech\InfoPlus.21\db21\code\"


cd C:\Program Files\AspenTech\InfoPlus.21\db21\code\
RECLOAD.EXE Y KPI1_6.rld 
RECLOAD.EXE Y KPI5_30.rld 
RECLOAD.EXE Y KPI10_60.rld 
RECLOAD.EXE Y KPI15_90.rld 
RECLOAD.EXE Y 12spc.rld 
