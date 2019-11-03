var app=require('express');
var Router=app.Router();


Router.get('/vision:/vision_name',function(req,res){

    res.send('ha');
});


module.exports=Router;