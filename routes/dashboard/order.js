const Promise = require('bluebird'),
    moment = require('moment');

let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
    qr_getOrder = dashboardQuery.qr_getOrder,
    qr_getOrderCount = dashboardQuery.qr_getOrderCount;

let getOrder = (req, res) => {
    let offset = +(req.query.offset),
        limit = +(req.query.limit);

    console.log(req.query);
    return qr_getOrder({ offset: offset, limit: limit }).then(orderArray => {
        res.json(orderArray);
    });

};

let getOrderCount = (req, res) => {
    return qr_getOrderCount({}).then((orderCount) => {
        res.json(orderCount);
    });
}


module.exports = {
    getOrder: getOrder,
    getOrderCount: getOrderCount
}