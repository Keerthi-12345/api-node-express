const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');



router.get('/amazon-status', awaitHandlerFactory(apiController.getAmazonStatus)); // http://localhost:3000/v1/amazon-status
router.get('/google-status',  awaitHandlerFactory(apiController.getGoogleStatus)); // http://localhost:3000/v1/google-status
router.get('/all-status',  awaitHandlerFactory(apiController.getAllStatus)); // http://localhost:3000/v1/all-status

module.exports = router;