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
        productId: uuidv5('https://afae4033.ngrok.io', uuidv5.URL),
        brand : brand,
        phone : phone,
        price : price,
        image : decodeURI(attachementUrl),
        status : 0,
        createdAt : currentDateTimeUnix(),
        updatedAt : currentDateTimeUnix()
    };

    // [RowDataPacket {
    //     ap_id: 4,
    //     brand_fk: 1,
    //     phone_fk: 1,
    //     price_fk: 2,
    //     price: 1000,
    //     shipping_cost: 10,
    //     discount: 5,
    //     status: 1,
    //     facebookid: '1879276758759273',
    //     product_id: '9e4cb6d9-28ab-5ca4-9401-77a4220a608c',
    //     brandTitle: 'iphone',
    //     brandPayload: 'iphone-1',
    //     phoneTitle: 'iphone-SE',
    //     phonePayload: 'ise-1',
    //     priceTitle: 'price>300',
    //     pricePayload: 'morePrice-2'
    // }]
    let productListingArray = [];

    qr_attachProductDetail({ attachedProductDetail: attachedProductDetail}).then((attachedPDId) => {
        console.log("user attachment data get insert!!!");
        console.log(attachedPDId, "*****************************");
        qr_selectAttacheProduct({brandId : brand, phoneId : phone, priceId : price, id : attachedPDId}).then((attachedProduct) => {

        console.log(attachedProduct, "#################################");

            return Promise.each(attachedProduct, (productData) => {

                productListingArray.push({
                    "title": `HEY`,
                    "image_url": `${productData.image}`,
                    "subtitle": `Price: ${productData.price} Discount: ${productData.discount}% = Total: ${(productData.price) - (productData.discount)}`,
                    "buttons": [{
                            "type": "web_url",
                            "url": `https://726d73ee.ngrok.io/order/attach?userId=${productData.facebookid}&productId=${productData.product_id}&d1=${productData.brand_fk}&d2=${productData.phone_fk}&d3=${productData.price_fk}`,
                            "title": "BUY",
                            "webview_height_ratio": "full",
                            "messenger_extensions": "true"


                        },
                        {
                            "type": "web_url",
                            "url": `${productData.image}`,
                            "title": "VIEW"
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