let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
    qr_getProduct = dashboardQuery.qr_getProduct,
    qr_getProductCount = dashboardQuery.qr_getProductCount,
    qr_getProductAttribute = dashboardQuery.qr_getProductAttribute,
    qr_getProductAttributeCount = dashboardQuery.qr_getProductAttributeCount,
    qr_getBrand = dashboardQuery.qr_getBrand,
    qr_getPhone = dashboardQuery.qr_getPhone,
    qr_getPrice = dashboardQuery.qr_getPrice,
    qr_getCategory = dashboardQuery.qr_getCategory;


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


let getProductAttributeCount = (req, res) => {

    let {brandId, phoneId, priceId, categoryId} = req.query;
    return qr_getProductAttributeCount({ 
        brandId : brandId, 
        phoneId : phoneId, 
        priceId : priceId, 
        categoryId : categoryId}).then((productArray) => {
        res.json(productArray);
    });

}

let getProductAttribute = (req, res) => {

    let offset = +(req.query.offset),
        limit = +(req.query.limit);

    let brandId = req.query.brandId,
        phoneId = req.query.phoneId,
        priceId = req.query.priceId,
        categoryId = req.query.categoryId;

    return qr_getProductAttribute({ offset: offset, limit: limit, brandId: brandId, phoneId: phoneId, priceId: priceId, categoryId: categoryId }).then((productArray) => {
        res.json(productArray);
    });

}

let getBrand = (req, res) => {
    return qr_getBrand({}).then((brandArray) => {
        res.json(brandArray);
    });

}

let getPhone = (req, res) => {
    let brandId = req.query.brandId;

    return qr_getPhone({ brandId: brandId}).then((phoneArray) => {
        res.json(phoneArray);
    });

}

let getPrice = (req, res) => {

    return qr_getPrice({ }).then((priceArray) => {
        res.json(priceArray);
    });

}

let getCategory = (req, res) => {

    return qr_getCategory({ }).then((categoryArray) => {
        res.json(categoryArray);
    });

}

module.exports = {
    getProductCount : getProductCount,
    productDetail : productDetail,
    getProductAttributeCount : getProductAttributeCount,
    getProductAttribute : getProductAttribute,
    getBrand : getBrand,
    getPhone : getPhone,
    getPrice : getPrice,
    getCategory : getCategory
}