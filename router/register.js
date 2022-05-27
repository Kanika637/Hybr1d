 const express=require('express')

 const router=express.Router()
 const mongoose=require('mongoose');
 const bcrypt=require('bcrypt');

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
             bcrypt.hash(req.body.password, 10,(err,hash)=>{
                 if(err){
                     console.log(err);
                     return res.status(500).json({
                         error:err
                     });
                    }
                     else{
                         const user=new User({
                             username:req.body.username,
                             password:hash,
                             type:req.body.type

                         });
                         user
                         .save()
                             .then(result=>{
                                 console.log(result);
                                 res.status(201).json({
                                     message:'User Created'
                                 });
                             })
                             .catch(err=>{
                                 console.log(err);
                                 res.status(500).json({
                                     error:err
                                 });
                             });
                         
                     }
                 })
             }


         }  )
        
     .catch(err=>{
         console.log(err);
         res.status(422).json({
             error:err
         })
     })
     
 });

 module.exports=router;