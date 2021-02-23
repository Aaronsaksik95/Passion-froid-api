const express = require('express');
const router = express.Router();

const imageRouter = require('./image.route')

router.use(imageRouter);

module.exports = router;