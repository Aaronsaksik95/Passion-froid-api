const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    path: {
        type: String,
        required: true,
        unique: true
    },
    imageType: {
        type: String,
        required: true
    },
    pictureWithProduct: {
        type: Boolean,
        required: true
    },
    pictureWithHuman: {
        type: Boolean,
        required: true
    },
    pictureWithInstitutional: {
        type: Boolean,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    pictureCredits: {
        type: String,
        required: true
    },
    limitedRightsOfUse: {
        type: Boolean,
        required: true
    },
    copyright: {
        type: String
    },
    endOfUseDate: {
        type: Date
    },
    tags: [{
        type: String
    }]

})

module.exports = mongoose.model('Image', imageSchema);