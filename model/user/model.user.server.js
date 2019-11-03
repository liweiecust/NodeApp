var mongoose=require('mongoose');
Schema=mongoose.Schema;

var userModel=new Schema({
    email:{type:String},
    resource:{
        visions:[],
        dorms:[]
    }
})

module.exports=mongoose.model('user',userModel);