const { count } = require("console")
const authorModel = require("../models/authorModel.js")
const bookModel= require("../models/bookModel.js")
const publisherModel= require("../models/publisherModel.js")
const mongoose = require("mongoose");


const createBook= async function (req, res) {
    let authorId = req.body.author
    let publisherId = req.body.publisher
    
    const authorDetails = await authorModel.findById(authorId)
    const publisherDetails = await publisherModel.findById(publisherId)

    if(req.body.hasOwnProperty("author_id")) {
        if(authorDetails === undefined) {
            return res.send({msg: "Author is not present"})
        } else {
            if(req.body.hasOwnProperty("publisher_id")) {
                if(publisherDetails === undefined) {
                    return res.send({msg: "Publisher is not present"})
                } else {
                    let bookCreated = await bookModel.create(req.body)
                    return res.send({data: bookCreated})
                }
            } else {
                return res.send({msg: "Publisher id is required"})
            }
        }
    }
    else {
        return res.send({msg: "Author id is required"})
    }
}

const getBooksWithAuthor = async function (req, res) {
    let data = req.body
    let allBooks = await bookModel.create(data)
    res.send({data: allBooks});
};


// 5th question assignment

const changeValueOfPublication = async function(req,res) {
    let specifiedBook = await bookModel.find().populate('author publisher')
    res.send({data : specifiedBook})
}

const hardCover = async function(req,res) {
    let publisherId = await publisherModel.find({nameOfPublication: {$in: ["penguine", "HarperCollins"]}})
    let match = []

    for(let i=0; i<publisherId.length; i++)
    match.push(publisherId[i]._id)

    let books = await bookModel.updateMany(

        {publisher : {$in:match}},
        {$set: req.body},
        {$new: true}
    )

    res.send({data : books})
}


const ratings = async function (req, res) {
    let ratings = await authorModel.find({ rating: { $gt: 3.5 } })
    let match = []
    for (let i = 0; i < ratings.length; i++)
        match.push(ratings[i]._id)
    let newbooks = await bookModel.updateMany(
        { author: { $in: match } },
        { $inc: req.body },
        { $new: true }
    )
    let bookee = await bookModel.find({ author: { $in: match } })

    res.send({ data: bookee })
}






module.exports.createBook= createBook

module.exports.getBooksWithAuthor = getBooksWithAuthor

module.exports.changeValueOfPublication = changeValueOfPublication

module.exports.hardCover = hardCover

module.exports.ratings = ratings