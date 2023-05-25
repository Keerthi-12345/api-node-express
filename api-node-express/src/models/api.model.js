const http = require('http');

class ApiModel {

    getGoogleData = async (params = {}) => {

        let data = {
            "url": "https://www.google.com",
            "statusCode": 200,
            "duration": 154,
            "date": 1606636800
        }
        // Setting the configuration for
        // the request
        const options = {
            hostname: 'google.com',
            method: 'GET'
        };

        // Sending the request
        const req = http.request(options, (res) => {

            res.on('data', (chunk) => {
                data += chunk;
            });

            // Ending the response 
            res.on('end', () => {
                console.log('Body:', data)
            });

        }).on("error", (err) => {
            console.log("Error: ", err)
        });

        req.end();
        console.log("HTTP request to google.com completed");
        return data;
    }

    getAmazonData = async (params = {}) => {

        let data = {
            "url": "https://www.amazon.com",
            "statusCode": 200,
            "duration": 154,
            "date": 1606636800
        }
        // Setting the configuration for
        // the request
        const options = {
            hostname: 'amazon.com',
            method: 'GET'
        };

        // Sending the request
        const req = http.request(options, (res) => {


            res.on('data', (chunk) => {
                data += chunk;
            });

            // Ending the response 
            res.on('end', () => {
                console.log('Body:', data)
            });

        }).on("error", (err) => {
            console.log("Error: ", err)
        });
        req.end();
        console.log("HTTP request to amazon.com completed");

        return data;
    }


}

module.exports = new ApiModel;