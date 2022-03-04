const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController= require("../controllers/publisherController")
const bookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getPublishersData", publisherController.getPublishersData)

 router.post("/createBook", bookController.createBook  )

 router.post("/getBooksData", bookController.getBooksWithAuthor)

 router.put("/changeValueOfPublication", bookController.changeValueOfPublication)

 router.put("/hardCover", bookController.hardCover)
 
 router.put("/ratings", bookController.ratings)


// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;