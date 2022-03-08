const express = require('express');
const router = express.Router();


const productController= require("../controllers/productController")
const userController= require("../controllers/userController")
const middleware = require("../middleware/middleware")
const orderController= require("../controllers/orderController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", productController.createProduct)
// router.get("/getUsersData", UserController.getUsersData)

router.post("/createUser", middleware.mwValidation, userController.createUser)

router.post("/createOrder", middleware.mwValidation, orderController.createOrder)

module.exports = router;