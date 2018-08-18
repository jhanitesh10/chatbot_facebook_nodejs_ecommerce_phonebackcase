
let handlePostback = ({messagingType}) => {

  let senderId = messagingType.sender.id,
      recipientId = messagingType.recipient.id,
      timeOfMessage = messagingType.timestamp,
      message = messagingType.postback;

  let payload = messagingType.postback.payload,
      title = messagingType.postback.title;
      
      console.log("the payload is", payload);

}

module.exports = {
  handlePostback : handlePostback
}
