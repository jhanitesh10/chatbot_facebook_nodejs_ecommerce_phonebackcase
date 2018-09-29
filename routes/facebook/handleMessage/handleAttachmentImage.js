const uuidv5 = require('uuid/v5');
let Promise = require("bluebird");
let api = require('../../../api/facebookRequest.js'),
    arq_typingOn = api.arq_typingOn,
    arq_typingOff = api.arq_typingOff,
    arq_markSeen = api.arq_markSeen,
    arq_sendMessage = api.arq_sendMessage;

let handleQuickReply = require('./handleQuickReply.js'),
    attachmentProductStatus = handleQuickReply.attachmentProductStatus;

let query = require('../../../database/facebook/productQuery.js'),
    qr_attachProductDetail = query.qr_attachProductDetail,
    qr_selectAttacheProduct = query.qr_selectAttacheProduct;

let shortFunction = require('../../shortFunction/function.js'),
    currentDateTimeUnix = shortFunction.currentDateTimeUnix,
    currentDateTimeStatndard = shortFunction.currentDateTimeStatndard,
    jsonString = shortFunction.jsonString;


let processAttachmentImage = ({
        senderId,
        attachementUrl
    }) => {

if (attachmentProductStatus.get("attachStatus") === 1) {
    let [brand, phone, price] = attachmentProductStatus.get("attachProduct");
    let sentAttachmentArr = [];

    let attachedProductDetail = {
        facebookId : senderId,
        productId: uuidv5('https://shopify-webhook.convrg.io', uuidv5.URL),
        brand : brand,
        phone : phone,
        price : price,
        image : decodeURI(attachementUrl),
        status : 0,
        createdAt : currentDateTimeUnix(),
        updatedAt : currentDateTimeUnix()
    };


    let productListingArray = [];

    return qr_attachProductDetail({ attachedProductDetail: attachedProductDetail}).then((attachedPDId) => {

        return qr_selectAttacheProduct({brandId : brand, phoneId : phone, priceId : price, attachedProductId : attachedPDId}).then((attachedProduct) => {

            return Promise.each(attachedProduct, (productData) => {

                productListingArray.push({
                    "title": `Freak phone case`,
                    "image_url": `${productData.image}`,
                    "subtitle": `Price: ${productData.price} Discount: ${productData.discount}% = Total: ${(productData.price) - (productData.discount)}`,
                    "buttons": [{
                            "type": "web_url",
                            "url": `https://c4ed6e0b.ngrok.io/order/attach/${productData.facebookid}/${productData.product_id}?d1=${productData.brand_id}&d2=${productData.phone_id}&d3=${productData.price_id}`,
                            "title": "BUY"
                            // ,
                            // "webview_height_ratio": "full",
                            // "messenger_extensions": "true"


                        },
                        {
                            "type": "web_url",
                            "url": `${productData.image}`,
                            "title": "VIEW"
                            // ,
                            // "webview_height_ratio": "full",
                            // "messenger_extensions": "true"
                        }
                    ]
                });

 

            }).then(() => {

            response = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": productListingArray
                    }
                }
            }

            return arq_sendMessage({
                senderId: senderId,
                response: response
            });

            });
        });
    });






}else{
console.log("Handle the attachment at early place++!!");
}



}

module.exports = {
    processAttachmentImage: processAttachmentImage
}