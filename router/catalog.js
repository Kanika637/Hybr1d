const express=require('express')

 const router=express.Router()
 const mongoose=require('mongoose');
const catalog = require('../models/catalog');

 const Catalog=require('../models/catalog')

 router.post('/',(req,res,next)=>{
     console.log(req.body);
     Catalog.find({product:req.body.product})
     .exec()
     .then(catalog=>{
        
             const catalogs=new Catalog({
                 seller_id:req.body.seller_id,
                 product:req.body.product,
                 price:req.body.price
             });
             catalogs
             .save()
             .then(result=>{
                 console.log(result);
                 res.status(201).json({
                     message:'Catalog created'
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