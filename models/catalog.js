const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    seller_id:{type:Number, required:true},
    product:{type:String, required:true},
    price:{type:Number, required:true},

    
});

module.exports=mongoose.model('Catalog',UserSchema);