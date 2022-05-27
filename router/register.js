 const express=require('express')

 const router=express.Router()
 const mongoose=require('mongoose');

 const User=require('../models/User')

 router.post('/',(req,res,next)=>{
     console.log(req.body);
     User.find({username:req.body.username})
     .exec()
     .then(user=>{
         if(user.length>=1){
             //username already exists
             return res.status(409).json({
                 message:"User already exists"
             });
         }   else{
             //generate a new user
             

         }  
        })
     .catch()
     
 });

 module.exports=router;