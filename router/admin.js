const express = require('express')
const router = express.Router();
const app = express();
const path = require('path')
const direPath = __dirname;
const Product = require('../dao/product')
const bodyparser = require('body-parser');

router.use(bodyparser.urlencoded({extended:true}))

app.set('views',path.join(direPath,'./','view'))
app.set('view engine','hbs');



router.get('/addProduct',(req,res)=>{
    res.render('addproduct',{title:'Add New Product'});
});


router.post('/addProductProcess',async (req,res)=>{
    console.log(req.body)
    console.log('in root')
    const newproduct = new Product({
        id:req.body.id,
        name:req.body.name,    
        price:req.body.price,
        description:req.body.description
    });

    console.log(newproduct)
    const result = await newproduct.save()
    console.log(result)
    res.render('products',{title:'My First Node App.'});
});

exports.router = router;