const epxress = require('express')
const path = require('path')
const app = epxress();
const direPath = __dirname;
const Product = require('./dao/product')


app.set('views',path.join(direPath,'./','view'))
app.set('view engine','hbs');

app.get("/",async (req,res)=>{

    console.log('in root')
    const newproduct = new Product({
        id:1,
        name:'Mobile',    
        price:12.30,
        description:'Mobile Phone'
    });

    console.log(newproduct)
    const result = await newproduct.save()
    console.log(result)
    res.render('index',{title:'My First Node App.'});
});

app.listen(3000,(req,res)=>{
    console.log('App Stared on Port : 3000..');
});