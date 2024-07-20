const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const ProductSchema = new Schema({

    ProductName: {
        type: String,
        trim: true,
        required: 'Product name is required',
    },
    price: {
        type: Number,
        reqiored: 'Price is required'
    },
    Description: {
        type: String,
        trim: true,
        
    },
},{timestamps: true});


module.exports = mongoose.model('Product', ProductSchema);