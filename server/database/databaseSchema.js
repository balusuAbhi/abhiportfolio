const mongoose = require('mongoose');

const customer = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    email:{
        type: String,
        required : true,
    },
    number:{
        type:String,
        required : true,
    },
    message:{
        type: String,
        required: true,
    }
})
const Todomodel = mongoose.model('customers',customer);

module.exports = Todomodel;