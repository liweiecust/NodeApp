exports.StartIP21={
    name:'Start IP21',
    note:'Start IP21 Manager',
    task_script_path:'/api/ps/StartIP21.ps1'
}
exports.BatchConfig={
    name:'Batch Config',
    note:'Config APRM Batch',
    task_script_path:'/api/ps/BatchConfig.ps1'

}
exports.test={
    name:'test',
    note:'test',
    task_script_path:'/api/ps/test.txt'
}
exports.LoadKPITag={
    name:'Load KPI tags',
    task_script_path:'../powershell/AddTagstoIP21.bat'
}

exports.TaskList=[
    exports.StartIP21,
    exports.BatchConfig,
    exports.test,

]
exports.Configurations=["BatchConfiguration", "S95Configuration","ConfigKPI",
"SetRepository","AssetConfigration","UpgradeDatabase"]

exports.jsons=[
    exports.StartIP21,exports.LoadKPITag,exports.BatchConfig
]
   