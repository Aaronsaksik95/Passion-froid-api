const Image = require('../models/image.model');
const { all } = require('../routes');


exports.update = (req, res) => {
    Image.findByIdAndUpdate(req.params.id, 
        {
            name: req.body.name,
            imageType: req.body.imageType,
            pictureWithProduct: req.body.pictureWithProduct,
            pictureWithHuman: req.body.pictureWithHuman,
            pictureWithInstitutional: req.body.pictureWithInstitutional,
            format: req.body.format,
            pictureCredits: req.body.pictureCredits,
            limitedRightsOfUse: req.body.limitedRightsOfUse,
            copyright: req.body.copyright,
            endOfUseDate: req.body.endOfUseDate,
            tags: req.body.tags
        })
    .then((data) => {
        res.send({
            image: data,
            updated: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating image"
        })
    })
}

exports.delete = (req, res) => {
    Image.findByIdAndDelete(req.params.id)
    .then(() => {
        res.send({
            deleted: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating image"
        })
    })
}

exports.read = (req, res) => {
    Image.find({})
    .then((data) => {
        res.send({
            image: data,
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating image"
        })
    })
}

exports.readWithId = (req, res) => {
    Image.findById(req.params.id)
    .then((data) => {
        res.send({
            image: data,
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating image"
        })
    })
}

exports.readWithName = (req, res) => {
    Image.find({
        name: { 
            $regex: req.body.name
        } 
    })
    .then((data) => {
        res.send({
            image: data,
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "an error occurred while recovering the image"
        })
    })
}

exports.readWithTags = (req, res) => {
    Image.find({
        tags: {$all: req.body.tags}
    })
    .then((data) => {
        res.send({
            image: data,
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "an error occurred while recovering the image"
        })
    })
}

exports.readWithProduct = (req, res) => {
    Image.find({
        pictureWithProduct: true
    })
    .then((data) => {
        res.send({
            image: data,
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "an error occurred while recovering the image"
        })
    })
}

exports.readWithFilter = (req, res) => {
    var allFilters = {
        imageType: req.body.imageType,
        pictureWithProduct: req.body.pictureWithProduct,
        pictureWithHuman: req.body.pictureWithHuman,
        pictureCredits: req.body.pictureCredits,
        pictureWithInstitutional: req.body.pictureWithInstitutional,
        format: req.body.format
    }
    Image.find(
       {imageType: allFilters.imageType}
    )
    .then((data) => {
        res.send({
            image: data,
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "an error occurred while recovering the image"
        })
    })
}