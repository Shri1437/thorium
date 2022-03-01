const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")


// const UserModel= require("../models/userModel.js")
// const BookController= require("../controllers/bookController")


router.post("/creatBooks", bookController.createBook )

router.post("/createAuthors", bookController.createAuthor)

router.get("/bookByChetan", bookController.bookByChetan)

router.post("/priceUpdate", bookController.priceUpdate)

router.get("/booksInPrice", bookController.booksInPrice)



module.exports = router;


