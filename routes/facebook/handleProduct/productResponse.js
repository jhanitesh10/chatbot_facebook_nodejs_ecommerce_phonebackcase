`use strict`;
let Promise = require('bluebird'),
    request = Promise.promisify(require('request')),
    rq = Promise.promisifyAll(request);

let api = require('../../../api/facebookRequest.js'),
    arq_typingOn = api.arq_typingOn,
    arq_typingOff = api.arq_typingOff,
    arq_markSeen = api.arq_markSeen,
    arq_sendMessage = api.arq_sendMessage,
    arq_getUserDetail = api.arq_getUserDetail;

let response;

let productListing = ({
    senderId,
    productRow,
    productArray
  }) => {
  let productListingArray = [];
  let [d1, d2, d3, d4] = productArray;

  return Promise.each(productRow, (productData) => {
    
    productListingArray.push({
      "title":`${productData.title}`,
      "image_url":`${productData.image}`,
      "subtitle":`Price: ${productData.price} Discount: ${productData.discount}% = Total: ${(productData.price) - (productData.discount)}`,
      "buttons": [
        {
          "type": "web_url",
          "url": `https://c4ed6e0b.ngrok.io/order/${senderId}/${productData.id}?d1=${d1}&d2=${d2}&d3=${d3}&d4=${d4}`,
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

  }).then( () => {
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

}



let afterProductListing = ( {senderId} ) => {

  response = {
    "text" : "I hope you like my above mentioned product 👌 \n If you want to go back and explore different category you can go and do that👍\n If you confused or not happy with above product Don't worry I have surprise in more Opion🎁",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Back",
        "payload": "afterProductBack"
      },
      {
        "content_type":"text",
        "title":"More",
        "payload":"afterProductMoreMenu"
      }
    ]
  }

  return arq_sendMessage( {senderId : senderId, response : response} );
}

let afterProductListingTop = ({
  senderId
}) => {

  response = {
    "text": "topproduct",
    "quick_replies": [{
        "content_type": "text",
        "title": "PreviouMenu",
        "payload": "morePreviousMenu"
      }
    ]
  }

  return arq_sendMessage({
    senderId: senderId,
    response: response
  });
}


let orderReceipt = ({
    orderDetailObj,
    paymentDetailObj,
    discount
  }) => {

    let senderId = orderDetailObj.facebook_user_id;

  let receiptTemplate = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "receipt",
        "recipient_name": `${paymentDetailObj.buyerName}`,
        "order_number": `${orderDetailObj.id}`,
        "currency": `${paymentDetailObj.currency}`,
        "payment_method": "Online",
        "order_url": "https://shopify-webhook.convrg.io",
        "timestamp": `${paymentDetailObj.createdAt}`,
        "address": {
          "street_1": `${orderDetailObj.address}`,
          "city": `${orderDetailObj.city}`,
          "postal_code": `${orderDetailObj.zip}`,
          "state": `${orderDetailObj.state}`,
          "country": "India"
        },
        "summary": {
          "subtotal": `${orderDetailObj.price}`,
          "shipping_cost": `${orderDetailObj.shipping_cost}`,
          "total_cost": `${paymentDetailObj.amount}`
        },
        "adjustments": [
          {
            "name": `${orderDetailObj.discount}% Discount`,
            "amount": `${discount}`
          }
        ],
        "elements": [{
            "title": `The Best freak case collection`,
            "subtitle": `The phone case for Brand ${orderDetailObj.brand}, ${orderDetailObj.phone}`,
            "quantity": 1,
            "price": `${paymentDetailObj.amount}`,
            "currency": `${paymentDetailObj.currency}`,
            "image_url": `${orderDetailObj.image}`
          }
        ]
      }
    }

  }

  let text1 = {
    "text" : `Thanks 🙂, ${paymentDetailObj.buyerName} for buying with us. Hope you enjoyed the process with me⚡`
  }

  let text2 = {
    "text": `Want help? just say help i will solve your problem.`,
    "quick_replies": [{
      "content_type": "text",
      "title": "PreviouMenu",
      "payload": "morePreviousMenu"
    },
    {
      "content_type": "text",
      "title": "MainMenu",
      "payload": "mainMenu"
    }]
  }

  let arr = [receiptTemplate, text1, text2];
  Promise.each(arr, (arrData) => {
    
    return arq_sendMessage({
      senderId: senderId,
      response: arrData
    }).then((data) => {
      console.log(data);
    });

  });

}


module.exports = {
  productListing : productListing,
  afterProductListing : afterProductListing,
  afterProductListingTop: afterProductListingTop,
  orderReceipt: orderReceipt
}
