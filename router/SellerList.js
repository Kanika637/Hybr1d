const express=require('express')

 const router=express.Router()
 const User=require('../models/User')

 router.get('/', async(req,res)=>{
     try{
       const sellerlist= await User.find()
       res.json(sellerlist)
        
     }catch(err){
         res.send('Error'+ err)
     }
    
 })

 module.exports=router;