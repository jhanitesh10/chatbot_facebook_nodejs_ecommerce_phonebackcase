`use strict`;
const Promise = require('bluebird');

let query = require('../../../database/facebook/botQuery'),
  qr_getWhom = query.qr_getWhom,
  qr_getText = query.qr_getText,
  qr_getBrand = query.qr_getBrand,
  qr_getPhone = query.qr_getPhone,
  qr_getPrice = query.qr_getPrice,
  qr_getCategory = query.qr_getCategory,
  qr_topProductPrice = query.qr_topProductPrice;

let responseFunction = require('./responseFunction.js'),
  whom = responseFunction.whom,
  brand = responseFunction.brand,
  phone = responseFunction.phone,
  price = responseFunction.price,
  category = responseFunction.category,
  more = responseFunction.more,
  help = responseFunction.help,
  topProductPrice = responseFunction.topProductPrice,
  attachmentText = responseFunction.attachmentText,
  afterAttachmentPrice = responseFunction.afterAttachmentPrice;

let handleProduct = require('../handleProduct/handleProductIndex.js'),
  processProduct = handleProduct.processProduct;

let productDetail = new Map();
let checkPayload = new Map();
let payloadKeyValue = new Map();
let attachmentProductStatus = new Map();



let processingQuickReply = ({
  senderId,
  quickReplyData
}) => {

  let payloadKey = quickReplyData.payload;

  let brandPayloadKey = [];
  let phonePayloadKey = [];
  let phoneBackPayloadKey = [];
  let pricePayloadKey = [];
  let priceBackPayloadKey = [];
  let categoryPayloadKey = [];
  let categoryBackPayloadKey = [];

  return qr_getBrand({
    status: 1
  }).then((brandRow) => {

    if (!productDetail.has(senderId)) {
      let productArray = [0, 0, 0, 0];
      productDetail.set(senderId, productArray);
    }

    if (productDetail.has(senderId)) {
      let productArray = [
        productDetail.get(senderId)[0],
        productDetail.get(senderId)[1],
        productDetail.get(senderId)[2],
        productDetail.get(senderId)[3]
      ];

      productDetail.set(senderId, productArray);
    }


    if (!checkPayload.has("brandMap")) {
      checkPayload.set("brandMap", brandPayloadKey);
    }

    if (!checkPayload.has("phoneMap")) {
      checkPayload.set("phoneMap", phonePayloadKey);
    }

    if (!checkPayload.has("phoneBackMap")) {
      checkPayload.set("phoneBackMap", phoneBackPayloadKey);

    }

    if (!checkPayload.has("priceMap")) {
      checkPayload.set("priceMap", pricePayloadKey);
    }

    if (!checkPayload.has("priceBackMap")) {
      checkPayload.set("priceBackMap", priceBackPayloadKey);
    }

    if (!checkPayload.has("categoryMap")) {
      checkPayload.set("categoryMap", categoryPayloadKey);
    }

    if (!checkPayload.has("categoryBackMap")) {
      checkPayload.set("categoryBackMap", categoryBackPayloadKey);
    }


    if (checkPayload.has("brandMap")){
      checkPayload.set("brandMap", checkPayload.get("brandMap"));
    }

    if(checkPayload.has("phoneMap")){
      checkPayload.set("phoneMap", checkPayload.get("phoneMap"));
    } 
 
    if(checkPayload.has("phoneBackMap")){
      checkPayload.set("phoneBackMap", checkPayload.get("phoneBackMap"));
    }  

    if(checkPayload.has("priceMap")){
      checkPayload.set("priceMap", checkPayload.get("priceMap"));
    }

    if (checkPayload.has("priceBackMap")) {
      checkPayload.set("priceBackMap", checkPayload.get("priceBackMap"));
    }

    if(checkPayload.has("categoryMap")){
      checkPayload.set("categoryMap", checkPayload.get("categoryMap"));
    }

    if(checkPayload.has("categoryBackMap")){
      checkPayload.set("categoryBackMap", checkPayload.get("categoryBackMap"));      
    }


 


    if (brandRow.length <= 11) {
      `         `
      return Promise.filter(brandRow, (value, index, arr) => {

        if (index < brandRow.length) {
          brandPayloadKey.push(value.payload);
          payloadKeyValue.set(value.payload, value.br_id);

        }

      }).catch((error) => {
        console.log("error,  while doing  brandFilterError!!", error)
      });

    }

  }).then(() => {

    checkPayload.set("brandMap", brandPayloadKey);

    if (checkPayload.get("brandMap") && checkPayload.get("brandMap").includes(payloadKey)) {
      productDetail.get(senderId)[0] = payloadKeyValue.get(payloadKey);
      let brandId = productDetail.get(senderId);

      return qr_getPhone({
          status: 1,
          brand: brandId[0]
        }).then((phoneRow) => {

          if (phoneRow.length <= 11) {

            return Promise.filter(phoneRow, (value, index, arr) => {

              if (index < phoneRow.length - 2) {
                phonePayloadKey.push(value.payload);
                payloadKeyValue.set(value.payload, value.pn_id);
              }

              if (index === phoneRow.length - 2) {
                phoneBackPayloadKey.push(value.payload);
              }


            }).catch((error) => {
              console.log("error, while doing phoneFilterError!!!", error)
            });

          }
        })
        .catch((error) => {
          console.log("error, while doing qr_getPhone query", error);
        })
        .then(() => {
          checkPayload.set("phoneMap", phonePayloadKey);
          checkPayload.set("phoneBackMap", phoneBackPayloadKey);

          return phone({
            senderId: senderId,
            brand: brandId[0]
          });

        });


    }else
    if (checkPayload.get("phoneMap")  && checkPayload.get("phoneMap").includes(payloadKey)) {
      productDetail.get(senderId)[1] = payloadKeyValue.get(payloadKey);

      return qr_getPrice({
        status: 1
      }).then((priceRow) => {
        if (priceRow.length <= 11) {

          return Promise.filter(priceRow, (value, index, arr) => {

            if (index < priceRow.length - 2) {
              pricePayloadKey.push(value.payload);
              payloadKeyValue.set(value.payload, value.pr_id);
            }

            if (index === priceRow.length - 2) {
              priceBackPayloadKey.push(value.payload);
            }

          }).catch((error) => {
            console.log("error, while doing priceFilterError!!!", error)
          });

        }

      }).then(() => {
        checkPayload.set("priceMap", pricePayloadKey);
        checkPayload.set("priceBackMap", priceBackPayloadKey);

        return price({
          senderId: senderId
        });

      });
    }else
    if (checkPayload.get("priceMap")  && checkPayload.get("priceMap").includes(payloadKey)) {
      productDetail.get(senderId)[2] = payloadKeyValue.get(payloadKey);

      return qr_getCategory({
        status: 1
      }).then((categoryPrice) => {
        if (categoryPrice.length <= 11) {

          Promise.filter(categoryPrice, (value, index, arr) => {

            if (index < categoryPrice.length - 2) {
              categoryPayloadKey.push(value.payload);
              payloadKeyValue.set(value.payload, value.ct_id);
            }

            if (index === categoryPrice.length - 2) {
              categoryBackPayloadKey.push(value.payload);
            }

          }).catch((error) => {
            console.log("error, while doing categoryFilterError!!!", error)
          });

        }

      }).catch((error) => {
        console.log("error, while doing queryCategoryError!!!", error);
      }).then(() => {
        checkPayload.set("categoryMap", categoryPayloadKey);
        checkPayload.set("categoryBackMap", categoryBackPayloadKey);

        return category({
          senderId: senderId
        });

      });
    }else
    if (checkPayload.get('categoryMap')  && checkPayload.get('categoryMap').includes(payloadKey)) {
      productDetail.get(senderId)[3] = payloadKeyValue.get(payloadKey);

      return processProduct({ senderId: senderId, productArray: productDetail .get(senderId), topStatus: 0});
    }else
    if (payloadKey==="mainMenu") {

      return brand({
        senderId: senderId
      });

    }else
    if (checkPayload.get("phoneBackMap")  && checkPayload.get("phoneBackMap").includes(payloadKey)) {

      return brand({
        senderId: senderId
       });

    }else
    if (checkPayload.get("priceBackMap")  && checkPayload.get("priceBackMap").includes(payloadKey)) {
      let brandId = productDetail.get(senderId);

      return phone({
        senderId: senderId,
        brand: brandId[0]
      });

    }else
    if (checkPayload.get("categoryBackMap") && checkPayload.get("categoryBackMap").includes(payloadKey)) {

      return price({
        senderId: senderId
      });

    }else
    if (payloadKey === "afterProductBack") {

      return category({
        senderId: senderId
      });

    }else
    if (payloadKey === "afterProductMoreMenu" || payloadKey === "morePreviousMenu") {

      return more({
        senderId : senderId
      });

    }else
    if (payloadKey === "moreTopProduct") {

      return processProduct({
        senderId: senderId,
        productArray: productDetail.get(senderId),
        topStatus: 1
      });

    }else
    if (payloadKey === "moreAttachPic") {
      attachmentProductStatus.set("attachStatus", 1);
      attachmentProductStatus.set("attachProduct", []);
      attachmentProductStatus.get("attachProduct")[0] = productDetail.get(senderId)[0];
      attachmentProductStatus.get("attachProduct")[1] = productDetail.get(senderId)[1];


      return attachmentText({senderId : senderId}).then(() => {
        return topProductPrice({senderId : senderId});
      });

    }else
    if (payloadKey === "moreHelp") {

      return help({
        senderId: senderId
      });
      
    }else
    if (payloadKey === "morePrice-1" || payloadKey === "morePrice-2" || payloadKey === "morePrice-3") {
      return qr_topProductPrice({status:1}).then( (productPriceKey) => {

        return Promise.each(productPriceKey, (productKey) => {

          if (productKey.payload == payloadKey) {
            
            attachmentProductStatus.get("attachProduct")[2] = productKey.tpr_id;
  
          }else{
            console.log("error in the attache product price!!!!!!");
          }

        }).then(() => {
          return afterAttachmentPrice({ senderId: senderId });
        });

      });

    }else{
      console.log("*************error with quick reply payload handling*************");
      return help({senderId : senderId});
    }

  });


}



module.exports = {
  processingQuickReply: processingQuickReply,
  attachmentProductStatus: attachmentProductStatus
}
