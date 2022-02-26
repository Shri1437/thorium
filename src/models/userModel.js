const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    year: {
        type: Number,
        unique: true,
        required: true
    },
    // : Number,
    category: {
        type: String,
        enum: ["fiction", "mystery", "historical","comics","science"] //"falana" will give an error
    },
    // age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) //users