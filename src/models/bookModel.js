const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName : String,
    price : Number,
    author: {
        type: ObjectId,
        ref: "newAuthor1"
    },
    isHardCover : {type : Boolean, default : false},
    publisher: {
        type: ObjectId,
        ref: "newPublisher1"
    }
}, { timestamps: true });


module.exports = mongoose.model('LibraryBook1', bookSchema)
 