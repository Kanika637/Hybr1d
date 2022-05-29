const express=require('express')

 const router=express.Router()
 const User=require('../models/User')

 router.get('/',(req,res,next)=>{
    User.find({"type":"seller"})
    .then(result=>{
        res.status(200).json({
            UserData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

 module.exports=router;