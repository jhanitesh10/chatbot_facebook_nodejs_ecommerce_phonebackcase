const Promise = require('bluebird'),
      moment = require('moment');
const request = (require('request')),
      fs = require('fs');
let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
    qr_getOrder = dashboardQuery.qr_getOrder,
    qr_getOrderCount = dashboardQuery.qr_getOrderCount;

let getOrder = (req, res) => {
    let offset = +(req.query.offset),
        limit = +(req.query.limit),
        paymentStatus = +(req.query.paymentStatus),
        deliveryStatus = +(req.query.deliveryStatus),
        processStatus = +(req.query.processStatus),
        orderStatus = +(req.query.orderStatus);

    return qr_getOrder({offset: offset, limit: limit, paymentStatus: paymentStatus, deliveryStatus : deliveryStatus, processStatus : processStatus, orderStatus : orderStatus }).then(orderArray => {
        res.json(orderArray);
    });

};

let getOrderCount = (req, res) => {
    let paymentStatus = +(req.query.paymentStatus),
        deliveryStatus = +(req.query.deliveryStatus),
        processStatus = +(req.query.processStatus),
        orderStatus = +(req.query.orderStatus);

    return qr_getOrderCount({
        paymentStatus : paymentStatus,
        deliveryStatus : deliveryStatus,
        processStatus : processStatus,
        orderStatus : orderStatus
    }).then((orderCount) => {
        res.json(orderCount);
    });
}

let downloadImage = (req, res) => {
    let url = req.query.url;
    console.log(req.query.url);
    request(url, function (error, response, body) {
        console.log(__dirname);
        response.pipe(fs.createWriteStream(__dirname+'/'));
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
   
}

module.exports = {
    getOrder: getOrder,
    getOrderCount: getOrderCount,
    downloadImage: downloadImage
}