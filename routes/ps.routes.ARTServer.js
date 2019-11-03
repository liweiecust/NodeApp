var express=require('express');
var router=express.Router();
var fs=require('fs');

router.get('/ps/Diagnostics@Agent.bat', (req, res) => {
    res.download(
        `${__dirname}\\..\\powershell\\Diagnostics\\agent-installer.bat`
    );
});
router.get('/ps/:psname', (req, res) => {
    let relativePath=req.params.psname.replace('@','\\');
    let path=`${__dirname}\\..\\powershell\\${relativePath}`;
    fs.readFile(
        path,(err,data)=>
        {
        if(err){res.status(500).send(err); return;}
        console.log(data.toString());
         res.status(200).send(data.toString());
         return;
        });
});

module.exports=router;