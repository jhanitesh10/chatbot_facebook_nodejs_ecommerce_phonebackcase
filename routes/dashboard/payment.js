const Promise = require('bluebird'),
      moment = require('moment');

let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
    qr_getCompletePayment = dashboardQuery.qr_getCompletePayment,
    qr_getCompletePaymentCount = dashboardQuery.qr_getCompletePaymentCount;

let getCompletePayment = (req, res) => {
    let offset = +(req.query.offset),
        limit = +(req.query.limit);

    console.log(req.query);
    return qr_getCompletePayment({offset: offset, limit: limit}).then(completePaymentArray => {
        res.json(completePaymentArray);
    });

};

let getCompletePaymentCount = (req, res) => {
    return qr_getCompletePaymentCount({}).then( (paymentCount) => {
        res.json(paymentCount);
    });
}
module.exports = {
    getCompletePayment: getCompletePayment,
    getCompletePaymentCount: getCompletePaymentCount
}