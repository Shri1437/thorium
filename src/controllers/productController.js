const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await productModel.create(data)
    // console.log(req.newAtribute)
    res.send({msg: savedData})
}

const getProductsData= async function (req, res) {
    let allUsers= await productModel.find()
    console.log(req.newAtribute)
    res.send({msg: allUsers})
}

module.exports.createProduct= createProduct
module.exports.getProductsData= getProductsData