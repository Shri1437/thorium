const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String, 
    author_id: {type : Number, unique : true, required : true}, 
    tags: [String],    
    prices: Number,
    ratings : Number
})


module.exports = mongoose.model('Book', bookSchema) 


















//users


    //isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")
