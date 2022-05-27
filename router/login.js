const express=require('express')

const router=express.Router()
const bcrypt=require('bcrypt')

const User=require('../models/User')

router.post('/', (req,res,next)=>{
    User.find({username: req.body.username})
    .exec()
    .then(user=>{
        if(user.length<1){
            //no user found
            return res.status(401).json({
                message:'Auth failed'
            })
        }
//we found the user now comapre the password
            bcrypt.compare(req.body.password, user[0].password,(err,result)=>{
                if(err){
                    return res.status(401).json({
                        message:'Auth failed'

                    })
                }
                if(result){
                    //success
                    return res.status(200).json({
                        message:'Auth successfull'
                    })

                }
                res.status(401).json({
                    message:'Auth failed'
                });
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });

        });
    });

module.exports=router;