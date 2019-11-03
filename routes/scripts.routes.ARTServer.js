var express=require('express');
var Router=express.Router();
var fs=require('fs');

Router.get('/:script_name',function(req,res){
    path=`${__dirname}\\..\\${req.params.script_name}`;
    fs.readFile(path,(err,data)=>{
        if(err) 
        {
            console.log(err);
            res.send(err);
        }
        res.send(data.toString());
    });
})

module.exports=Router;