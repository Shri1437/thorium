const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const authorSchema = new mongoose.Schema( {
    author_id : {type : Number, unique : true, required : true},
    author_name : String,
    isPublished : Boolean,
    age: Number,
    address : String
})

module.exports = mongoose.model('User', authorSchema) 

















