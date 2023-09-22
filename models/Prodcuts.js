const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    p_name : {
        type : String,
        required : true
    },
    p_description : {
        type : String,
        required : true,
        default : 'product_description'
    },
    p_price : {
        type : Number,
        required : true,
        default : 999
    },
    create_date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema)