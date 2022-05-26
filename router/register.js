 const express=require('express')

 const router=express.Router()

 router.post('/',(req,res,next)=>{
     res.status(200).json({
         message:"from /api/auth/register"
     })
 });

 module.exports=router;