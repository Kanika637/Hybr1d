const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    product:{type:String, required:true},
});

module.exports=mongoose.model('ListOfItems',UserSchema);