'use strict';
let Promise = require('bluebird');

let handleDelivery = ({messagingType}) => {

  let senderId = messagingType.sender.id,
      recipientId = messagingType.recipient.id,
      timeOfMessage = messagingType.timestamp,
      deliveryMessage = messagingType.delivery;
  let messageId = deliveryMessage.mids,
      watermark = deliveryMessage.watermark,
      seq = deliveryMessage.seq;

  if(messageId){
    return Promise.each(messageId, (id) => {
      console.log(`Delivery for the messageId ${id}, delivered to user ${senderId} time of message ${timeOfMessage}`);
    }).catch((error) => {
      console.log("Error, error while handling messageId @ handleDeliveryIndex.js", error);
    });
  }
  else{
    console.log("error, not found message id @ handleDeliveryIndex.js inside handleDelivery folder");
  }

}

module.exports = {
  handleDelivery : handleDelivery
}
