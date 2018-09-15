let query = require('../../../database/facebook/productQuery.js');
    qr_getProduct = query.qr_getProduct;

let product = require('./productResponse.js'),
    productListing = product.productListing,
    afterProductListing = product.afterProductListing,
    afterProductListingTop = product.afterProductListingTop;

let processProduct = ({senderId, productArray, trendingStatus, basicStatus}) => {
let [ brandId, phoneId, priceId, categoryId] = productArray;

  return qr_getProduct({
      productArray: productArray,
      basicStatus: basicStatus,
      trendingStatus: trendingStatus
    }).then((productRow) => {


      if(productRow){      
      return productListing({senderId : senderId, productRow : productRow, productArray : productArray}).then((data) => {
        console.log("froduct found");
      });
    }else{
        console.log("product not fount");
    }

  }).then(() => {

    if (trendingStatus) {

      return afterProductListingTop({
        senderId: senderId
      }).then(() => {
        console.log("complete product with after and before product call!!!");
      });

    } else {

      return afterProductListing({
        senderId: senderId
      }).then(() => {
        console.log("complete product with after and before product call!!!");
      });

    }

  });

}

module.exports = {
  processProduct : processProduct
}
