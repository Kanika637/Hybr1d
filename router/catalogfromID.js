const express=require('express')

 const router=express.Router()
 const Catalog=require('../models/catalog')

 router.get('/:seller_id',(req,res,next)=>{
    Catalog.findById(req.params.id)
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