'use strict';

const Promise = require('bluebird');

let handleMessageIndex = require('./handleMessage/handleMessageIndex.js'),
    handleMessage = handleMessageIndex.handleMessage;

let handlePostbackIndex = require('./handlePostback/handlePostbackIndex.js'),
    handlePostback = handlePostbackIndex.handlePostback;

let handleReadIndex = require('./handleRead/handleReadIndex.js'),
    handleRead = handleReadIndex.handleRead;

let handleDeliveryIndex = require('./handleDelivery/handleDeliveryIndex.js'),
    handleDelivery = handleDeliveryIndex.handleDelivery;

let responseFunction = require('./handleMessage/responseFunction.js'),
    whom = responseFunction.whom,
    brand = responseFunction.brand,
    phone = responseFunction.phone,
    price = responseFunction.price,
    category = responseFunction.category;

let confidentail = require('../../confidential/data.js'),
    verifyToken = confidentail.verifyToken;

let processRequestEndpoint = (req, res) => {

  return Promise.resolve(processRequest({req : req})).then( () => {
    res.sendStatus(200);
  }).catch( (error) => {
    // console.log("Error, while sending 200 statusCode to server @ index.js inside facebook folder", error);
    res.sendStatus(400);
  });

}


let processRequest  = ({req}) => {
  let body = req.body;
 
  if(body.object === 'page'){

    return Promise.each(body.entry, (entryData) => {
      let id = entryData.id,
          time = entryData.time,
          messaging = entryData.messaging;

      return Promise.each(messaging, (messagingType) => {

        if(messagingType.message){

          return handleMessage({messagingType : messagingType});

        }else
        if(messagingType.postback){

          return handlePostback({messagingType : messagingType});

        }else
        if(messagingType.delivery){

          return handleDelivery({messagingType : messagingType});

        }else
        if(messagingType.read){

          return handleRead({ messagingType : messagingType});

        }else{

          console.log("Error, unknown message type @ index.js inside facebook folder");

        }

      });

    });
  }

}


let verifyAccessToken = (req, res) => {

  let VERIFY_TOKEN = verifyToken,
      mode = req.query['hub.mode'],
      token = req.query['hub.verify_token'],
      challenge = req.query['hub.challenge'];

  if (mode && token) {

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }

  }else{

    console.log("Error, wrong mode and token @ index.js inside facebook folder");

  }

}

module.exports = {
  processRequestEndpoint : processRequestEndpoint,
  processRequest : processRequest,
  verifyAccessToken: verifyAccessToken
}
