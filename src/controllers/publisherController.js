const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}


const getPublishersData= async function (req, res) {
    let publisherData = await PublisherModel.find()
    res.send({data: publisherData})
}

module.exports.createPublisher= createPublisher

module.exports.getPublishersData= getPublishersData
