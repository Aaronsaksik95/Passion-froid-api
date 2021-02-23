const express = require('express');
const router = express.Router();
const cloudinary = require("../configs/cloudinary");
const upload = require("../configs/multer");
const image = require('../controllers/image.controlleur');
const Image = require('../models/image.model');


router.post('/images', upload.single("file"), async (req, res, file) => {
    const result = await cloudinary.uploader.upload(req.file.path);
    const image = new Image({
        name: req.body.name,
        path: result,
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
    });

    await image.save()
    .then((data) => {
        res.send({
            image: data,
            created: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating image"
        })
    })
});
router.put('/images/:id', image.update);
router.delete('/images/:id', image.delete);
router.get('/images', image.read);
router.get('/images/:id', image.readWithId);
router.get('/images/name/', image.readWithName);
router.get('/images/tags/', image.readWithTags);
router.get('/images/filters', image.readWithFilter);
router.get('/images/product/', image.readWithProduct);

module.exports = router;