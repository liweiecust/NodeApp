var express = require('express');
var Router = express.Router();
var fs=require('fs');
//var taskControl=require('../controller/task.controller.ARTServer.js');
var tasks=require('../model/task/task.constants');

Router.get('/task/:task_name',function(req,res,next){
    //res.writeHead(200,DocumentType={'Content-Type':'application/json'})
    tsk={name:req.params.task_name};
    path=`${__dirname}\\..\\powershell\\${tsk.name}.ps1`;
    console.log(path);
   /*  fs.readFile(path,(err,data)=>{
        if(err){
            res.send(err);
        }
        console.log(data);
        res.send(data);
     
    }); */
  
    //res.json(task) ;te
    res.download(path,function(err,res){
        if(err) console.log(res);
        else {console.log("success")}
    });

})
Router.get('/testReadFile',function(req,res){
    path=`${__dirname}\\..\\powershell\\Batch Config.ps1`;
    fs.readFile(path,(err,data)=>{
        console.log(data);
        console.log(data.toString());
        res.send(data.toString());
    })
   
})
Router.get('/ps/configurations/all',function(req,res){
    let tsks=tasks.Configurations;
    console.log(tsks);
    console.log(JSON.stringify(tsks));
res.send(tsks.toString());
    
})
Router.get('/ps/configurations/jsons',function(req,res){
    let tsks=tasks.jsons;
    console.log(tsks);
    console.log(JSON.stringify(tsks));
res.send(JSON.stringify(tsks));
    
})
module.exports=Router;