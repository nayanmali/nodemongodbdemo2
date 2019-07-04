const epxress = require('express')
const path = require('path')
const app = epxress();
const direPath = __dirname;
const adminRouter = require('./router/admin')
const Product = require('./dao/product')


app.set('views',path.join(direPath,'./','view'))
app.set('view engine','hbs');

app.use(adminRouter.router);
app.get("/",(req,res)=>{
    res.render('index',{title:'My First Node App.'});
});

app.listen(3000,(req,res)=>{
    console.log('App Stared on Port : 3000..');
});