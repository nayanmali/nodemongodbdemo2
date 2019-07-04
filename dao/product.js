const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopingcart',{ useNewUrlParser: true })
    .then(()=>console.log('Connected.'))
    .catch(error=>console.log(error))

const productSchema = new mongoose.Schema({
    id:Number,
    name:String,    
    price:Number,
    description:String
});

module.exports = mongoose.model('Product',productSchema);

