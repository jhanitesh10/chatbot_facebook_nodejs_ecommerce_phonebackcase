let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
    qr_getProduct = dashboardQuery.qr_getProduct,
    qr_getProductCount = dashboardQuery.qr_getProductCount;


let getProductCount = (req, res) => {

    return qr_getProductCount({}).then((productArray) => {
        res.json(productArray);
    });

}

let productDetail = (req, res) => {

    let offset = +(req.query.offset),
        limit = +(req.query.limit);


    return qr_getProduct({ offset: offset, limit: limit }).then((productArray) => {

        res.json(productArray);
    });

}

module.exports = {
    getProductCount : getProductCount,
    productDetail : productDetail
}