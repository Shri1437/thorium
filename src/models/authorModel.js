const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName: String,
    rating:Number,

}, { timestamps: true });

module.exports = mongoose.model('newAuthor1', authorSchema)
