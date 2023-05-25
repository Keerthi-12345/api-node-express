
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const apiModel = require('../models/api.model');
dotenv.config();

/******************************************************************************
 *                              API Controller
 ******************************************************************************/
class ApiController {


    getAmazonStatus = async (req, res, next) => {
        let start = new Date().getMilliseconds();

        const data = await apiModel.getAmazonData();
        let end = new Date().getMilliseconds();
        data.date= Math.floor(Date.now() / 1000);
        data.duration= end-start;

        res.send(data);
    };

    getGoogleStatus = async (req, res, next) => {
        let start = new Date().getMilliseconds();

        const data = await apiModel.getGoogleData();
        let end = new Date().getMilliseconds();
        data.date= Math.floor(Date.now() / 1000);
        data.duration= end-start;

        res.send(data);
    };

    getAllStatus = async (req, res, next) => {
        let start = new Date().getMilliseconds();
        const googleData = await apiModel.getGoogleData();
        let end = new Date().getMilliseconds();
        googleData.date= Math.floor(Date.now() / 1000);
        googleData.duration= end-start;

        let start_am = new Date().getMilliseconds();
        const amazonData = await apiModel.getAmazonData();
        let end_am = new Date().getMilliseconds();
        amazonData.date= Math.floor(Date.now() / 1000);
        amazonData.duration= end_am-start_am;

        var a=[]
        a.push(googleData);
        a.push(amazonData);
        res.send(a);
    };

}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new ApiController;