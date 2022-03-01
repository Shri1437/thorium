const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const res = require("express/lib/response")

const createBook = async function (req, res) {
    let bookData= req.body
    let savedData1= await BookModel.create(bookData)

    res.send({msg: savedData1})
}


const createAuthor = async function (req, res) {
    let authorData= req.body
    let savedData2= await AuthorModel.create(authorData)

    res.send({msg: savedData2})
}

const bookByChetan = async function(req,res) {
    let authorDetails = await AuthorModel.findOne({author_name : "Chetan Bhagat"})
    let authorId = authorDetails.author_id
    let chetanBook = await BookModel.find({author_id : authorId}).select( { name : 1, _id : 0 } )

    res.send( { bookByChetan : chetanBook} )
}

const priceUpdate = async function(req,res) {
    let update = req.body
    let bookData = await BookModel.findOneAndUpdate( {name : "Two States"}, {$set : update}, {new : true} )
    let authorId = bookData.author_id
    let author = await authorModel.findOne( {author_id : authorId}.select({author_name : 1, _id : 0}) )

    res.send({author_name : author.author_name, price : bookData.price})
}

const booksInPrice = async function(req,res) {
    let books = await (await BookModel.find( { price : {$gte : 60, $lte : 100} } ).select({author_name : 1, _id : 0 }) ).map(x => x.author_name)
    console.log(books)
    
    
    let arr = []
    for(let i=0; i<books.length; i++) {
        let arr1 = await (await AuthorModel.find({author_id : books[i]}).select({author_name : 1,  _id : 0})).map(x => x.author_name)
        arr.push(arr1)
    }
    const arrayOfAuthors = arr.flat()
res.send({author_name : arrayOfAuthors})
}




module.exports.createBook= createBook 
module.exports.createAuthor= createAuthor
module.exports.bookByChetan= bookByChetan
module.exports.priceUpdate= priceUpdate
module.exports.booksInPrice= booksInPrice