const express = require('express')
const router = express.Router()
const path = require('path')
const direPath = __dirname;


router.get("index",(req,res)=>{
    res.render(path.join(direPath,'../','view','index.html'));
});
router.get("about",(req,res)=>{

});
router.get("contact",(req,res)=>{

});
router.get("services",(req,res)=>{

});
router.get("product",(req,res)=>{

});
router.get("cart",(req,res)=>{

});