'use strict';

let handleRead = ({messagingType}) => {

  let senderId = messagingType.sender.id,
      recipientId = messagingType.recipient.id,
      timeOfMessage = messagingType.timestamp,
      messageRead = messagingType.read;
  let watermark = messageRead.watermark,
      seq = messageRead.seq;

      console.log(`The recipient with recipient_ID ${recipientId} read the message @ ${timeOfMessage}!!!`);
}

module.exports = {
  handleRead : handleRead
}
