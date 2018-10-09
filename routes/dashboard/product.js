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
    qr_editProductData = dashboardQuery.qr_editProductData,
    qr_editProductSave = dashboardQuery.qr_editProductSave,
    qr_editProductAttributeSave = dashboardQuery.qr_editProductAttributeSave,
    qr_deleteProductAttribute = dashboardQuery.qr_deleteProductAttribute,
    qr_handleProductAvailibility = dashboardQuery.qr_handleProductAvailibility,
    qr_deleteProduct = dashboardQuery.qr_deleteProduct;


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



}
let editProduct = (req, res) => {
    let {productAttributeId} = req.query;
    console.log(productAttributeId);
    return qr_editProductData({productAttributeId: productAttributeId}).then( (editDataArray) => {
        res.json(editDataArray);
    });
}

let editProductSave = (req, res) => {

    let body = req.body.productDetail;

    let productAttributeObj = {
        brandId: body.brand_id,
        phoneId: body.phone_id,
        priceId: body.price_id,
        categoryId: body.category_id,
        productId: body.product_id,
        id : body.id,
        status: 1,
        updatedOn: moment().unix()
    }

    let productDetailObj = {
        productId: body.product_id,
        productType: body.product_type,
        trendingOrBasic: body.trending_status,
        title: body.title,
        subTitle: body.subtitle,
        image: body.image,
        discount: body.discount,
        priceValue: body.priceValue,
        shippingCost: body.shipping_cost,
        available: body.available,
        stock: body.product_count,
        status: 1,
        updatedOn: moment().unix(),
    }
    // console.log(productAttributeObj, productDetailObj);
    return qr_editProductSave({ productDetailObj: productDetailObj }).then((productInsertId) => {

        productAttributeObj.productId = productInsertId.insertId;
        return qr_editProductAttributeSave({ productAttributeObj: productAttributeObj }).then((attributeInsertData) => {
            console.log(attributeInsertData, "2***************************");
        });
    });
 
}

let deleteProductAttribute = (req, res) => {
    let productAttributeId = req.query.productAttributeId,
        activeStatus = 0;

    return qr_deleteProductAttribute({ productAttributeId: productAttributeId, activeStatus: activeStatus}).then((deleteData) => {
        console.log(deleteData)
    });
}

let handleAvailibility = (req, res) => {
    let productId = req.query.productId,
        available = +(!(+(req.query.available)));
        
    return qr_handleProductAvailibility({ productId: productId, available: available}).then((data) => {
        console.log(data);
    });
}

let deleteProduct = (req, res) => {
    let productId = req.query.productId,
        activeStatus = 0;

    return qr_deleteProduct({ productId: productId, activeStatus: activeStatus }).then((deleteData) => {
        console.log(deleteData)
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
  editProduct: editProduct,
  editProductSave: editProductSave,
  deleteProductAttribute: deleteProductAttribute,
  handleAvailibility: handleAvailibility,
  deleteProduct : deleteProduct
};