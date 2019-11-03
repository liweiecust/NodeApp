var express=require('express');
var app=express();
var config=require('./config');
var mongoose=require('mongoose');

var taskRoute=require('./routes/task.routes.server.js');
var psRoute=require('./routes/ps.routes.ARTServer.js');
var homeRoute=require('./routes/Home');
var scriptsRoute=require('./routes/scripts.routes.ARTServer');

//mongoose.connect(config.dbAddress,{useNewUrlParser:true});
app.set('view engine','ejs');
app.use('/api',taskRoute);
app.use('/api',psRoute);
app.use('/home',homeRoute);
app.use('/public',express.static('public'));
app.use('/scripts',scriptsRoute);
/* app.get('/',function(req,res){
    res.render('home',{title:'Express',
    tasks:[{taskname:'configIP21'},{taskname:'aprm'}]})
}); */

//host http://10.148.68.58:3000/
app.listen(3000,
    console.log('server started'),
   )
app.get('/',function(req,res){
   
    res.render('About');
})