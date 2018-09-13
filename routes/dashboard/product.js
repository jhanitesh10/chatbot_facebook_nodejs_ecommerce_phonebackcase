const Promise = require('bluebird'),
      moment = require('moment');

let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
    qr_getProduct = dashboardQuery.qr_getProduct,
    qr_getProductCount = dashboardQuery.qr_getProductCount,
    qr_getProductAttribute = dashboardQuery.qr_getProductAttribute,
    qr_getProductAttributeCount = dashboardQuery.qr_getProductAttributeCount,
    qr_getBrand = dashboardQuery.qr_getBrand,
    qr_getPhone = dashboardQuery.qr_getPhone,
    qr_getPrice = dashboardQuery.qr_getPrice,
    qr_getCategory = dashboardQuery.qr_getCategory,
    qr_insertProduct = dashboardQuery.qr_insertProduct,
    qr_insertProductAttribute = dashboardQuery.qr_insertProductAttribute,
    qr_editProductData = dashboardQuery.qr_editProductData;


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

let addProduct = (req, res) => {

    let body = req.body.productDetail;
    console.log(body);
    let productAttributeObj = {
        brandId : body.brandId,
        phoneId : body.phoneId,
        priceId : body.priceId,
        categoryId : body.categoryId,
        productId : '',
        status : 1,
        createOn : moment().unix(),
        updatedOn : moment().unix()
    }

    let productDetailObj = {
        productType: body.productType,
        trendingOrBasic : body.trendingOrBasic,
        title : body.title,
        subTitle : body.subTitle,
        image : body.image,
        discount : body.discount,
        priceValue : body.priceValue,
        shippingCost : body.shippingCost,
        available : body.available,
        stock : body.stock,
        status : 1,
        createdOn : moment().unix(),
        updatedOn : moment().unix(),
    }
    return qr_insertProduct({ productDetailObj : productDetailObj}).then((productInsertId) => {
        console.log(productInsertId.insertId, "**************");

        productAttributeObj.productId = productInsertId.insertId;
        return qr_insertProductAttribute({ productAttributeObj: productAttributeObj }).then((attributeInsertData) => {
            console.log(attributeInsertData);
        });
    });

// qr_insertProductAttribute


//     { productDetail:
//    { showModal: false,
//      brand:
//       [ [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object] ],
//      phone:
//       [ [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object] ],
//      price: [ [Object], [Object], [Object], [Object], [Object] ],
//      category:
//       [ [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object] ],
//      brandId: 1,
//      phoneId: 1,
//      priceId: 1,
//      categoryId: 1,
//      productType: 'alskd',
//      trendingOrBasic: '',
//      title: '1',
//      subTitle: 'lkdsj',
//      image: 'C:\\fakepath\\10 Cloverfield Lane 2016 1080p HDRip x264 AAC-JYK.mkv.jpg',
//      discount: '23',
//      priceValue: '232',
//      shippingCost: '23',
//      available: '1',
//      stock: '' } }

}
let editProduct = (req, res) => {
    let {productId, productAttributeId} = req.query;

    return qr_editProductData({ productId: productId, productAttributeId: productAttributeId}).then( (editDataArray) => {
        res.json(editDataArray);
    });
}

module.exports = {
  getProductCount: getProductCount,
  productDetail: productDetail,
  getProductAttributeCount: getProductAttributeCount,
  getProductAttribute: getProductAttribute,
  getBrand: getBrand,
  getPhone: getPhone,
  getPrice: getPrice,
  getCategory: getCategory,
  addProduct : addProduct,
  editProduct: editProduct
};