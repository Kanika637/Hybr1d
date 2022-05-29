const express=require('express')

const router=express.Router()
const mongoose=require('mongoose');
const ListOfItems = require('../models/ListOfItems');


 router.post('/:seller_id',(req,res,next)=>{
     console.log(req.body);
     ListOfItems.findById(req.params.id)
     .exec()
     .then(list=>{
        
             const lists=new ListOfItems({
                 product:req.body.product,
                 });
             lists
             .save()
             .then(result=>{
                 console.log(result);
                 res.status(201).json({
                     message:'Order created'
                 });
             })
             .catch(err=>{
                 console.log(err);
                 res.status(500).json({
                     error:err
                 })
             })
         
     })
 })

 module.exports=router;