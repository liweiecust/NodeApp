var express=require('express');
var Router=express.Router();
var tasks=require('../model/task/task.constants');

Router.get('/',function(req,res){
    console.log(tasks.TaskList);
    res.render('Home',{
        title:'Happy testing',
        tasks:tasks.TaskList});
})



module.exports=Router;
