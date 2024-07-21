const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const ProductSchema = new Schema({

    ProductName: {
        type: String,
        trim: true,
        required: 'Product name is required',
    },
    quantity: {
        type: Number,
        required: "Quantity is required"
    },
    price: {
        type: Number,
        required: 'Price is required'
    },
    Description: {
        type: String,
        trim: true,
        
    },
},{timestamps: true});


module.exports = mongoose.model('Product', ProductSchema);