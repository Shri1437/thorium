const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    nameOfPublication: String,
    headQuarter:String,
    }, { timestamps: true });

module.exports = mongoose.model('newPublisher1', publisherSchema)
