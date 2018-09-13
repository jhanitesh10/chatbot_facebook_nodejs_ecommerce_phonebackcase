`use strict`;
let api = require('../../../api/facebookRequest.js'),
    arq_typingOn = api.arq_typingOn,
    arq_typingOff = api.arq_typingOff,
    arq_markSeen = api.arq_markSeen,
    arq_sendMessage = api.arq_sendMessage,
    arq_getUserDetail = api.arq_getUserDetail;

let handleIsEcho = require('./handleIsEcho.js'),
    handleEcho = handleIsEcho.handleEcho;
let handleTextMessage = require('./handleTextMessage.js'),
    processingTextMessage = handleTextMessage.processingTextMessage;

let handleQuickReply = require('./handleQuickReply.js'),
    processingQuickReply = handleQuickReply.processingQuickReply;

let handleAttachment = require('./handleAttachment'),
    processAttachment = handleAttachment.processAttachment;

let handleUnknownType = require('./handleUnknownType.js');



let query = require('../../../database/facebook/botQuery'),
    qr_checkFacebookUser = query.qr_checkFacebookUser,
    qr_insertFacebookUser = query.qr_insertFacebookUser,
    qr_UpdateFacebookUser = query.qr_UpdateFacebookUser;

let shortFunction = require('../../shortFunction/function.js'),
    jsonString = shortFunction.jsonString,
    jsonParse = shortFunction.jsonParse,
    currentDateTimeUnix = shortFunction.currentDateTimeUnix;

let handleMessage = ({messagingType}) => {

  let senderId = messagingType.sender.id,
      recipientId = messagingType.recipient.id,
      timeOfMessage = messagingType.timestamp,
      message = messagingType.message;


  let isEcho = message.is_echo,
      messageId = message.mid,
      appId = message.app_id;


  let messageText = message.text,
      messageAttachments = message.attachments,
      quickReplyData = message.quick_reply;

  if(!isEcho){

    return qr_checkFacebookUser({senderId : senderId}).then( (userData) => {

      if(userData === 0){

        return arq_getUserDetail({senderId : senderId}).then( (userDetailData) => {
          let userDetail = JSON.parse(userDetailData.body);
          let statusCode = userDetailData.statusCode;
 
          
          let userDetailObj = {
                profilePic  : (userDetail.profile_pic),
                facebookId : userDetail.id,
                name  : userDetail.name,
                firstName  : userDetail.first_name,
                lastName  : userDetail.last_name,
                gender  : userDetail.gender,
                locale  : userDetail.locale,
                timezone  : userDetail.timezone,
                photos  : jsonString(userDetail.photos),
                picture  : jsonString(userDetail.picture),
                createdOn : currentDateTimeUnix(),
                updatedOn : currentDateTimeUnix()
          }

          return qr_insertFacebookUser({userDetailObj : userDetailObj}).then( (insertId) => {
            console.log("User detail  insert into database with insertId", insertId);
          }).catch( (error) => {
            console.log("Error, error while making query qr_insertFacebookUser @handleMessageIndex.js inside facebook/handleMesssage", error);
          });

        }).catch( (error) => {
          console.log("Error, error while making api call to facebook for user detail arq_getUserDetail @ handleMessageIndex.js inside facebook/handleMessage", error);
        });


      }else{

        return arq_getUserDetail({
          senderId: senderId
        }).then((userDetailData) => {
          let userDetail = JSON.parse(userDetailData.body);
          let statusCode = userDetailData.statusCode;
          
          let userDetailObj = {
            profilePic: (userDetail.profile_pic),
            facebookId: userDetail.id,
            name: userDetail.name,
            firstName: userDetail.first_name,
            lastName: userDetail.last_name,
            gender: userDetail.gender,
            locale: userDetail.locale,
            timezone: userDetail.timezone,
            photos: jsonString(userDetail.photos),
            picture: jsonString(userDetail.picture),
            createdOn: currentDateTimeUnix(),
            updatedOn: currentDateTimeUnix()
          }
          console.log(userDetailObj);

          return qr_UpdateFacebookUser({
            userDetailObj: userDetailObj
          }).then((updateId) => {
            console.log("User detail  updated into database with insertId", updateId);
          }).catch((error) => {
            console.log("Error, error while making query qr_updatetFacebookUser @handleMessageIndex.js inside facebook/handleMesssage", error);
          });

        }).catch((error) => {
          console.log("Error, error while making api call to facebook for user detail arq_getUserDetail @ handleMessageIndex.js inside facebook/handleMessage", error);
        });

        

      }
    }).catch( (error) => {
      console.log("Error, error while checking user existence into database qr_checkFacebookUser @ handleMessageIndex.js inside facebook/handleMessage", error);
    }).then(() => {

      return arq_markSeen({senderId : senderId}).then( (markSeenData) => {
        return arq_typingOn({senderId : senderId}).then( (typingOn) => {

          if(quickReplyData){
            return processingQuickReply({senderId : senderId, quickReplyData : quickReplyData});
          }else
          if(messageAttachments){
            return processAttachment({ senderId: senderId, messageAttachments: messageAttachments });
          }else
          if(messageText){
            return processingTextMessage({senderId : senderId, messageText : messageText});
          }else{
            console.log("Type of message is unknown");
          }


        }).catch( (error) => {
          console.log("Error, error while making facebook API call arq_typingOn @ handleMessageIndex inside facebook/handleMessage", error);
        });
      }).catch((error) => {
        console.log("Error, error while making api call to facebook @ handleMessageIndex inside facebook/handleMessage", error);
      });
    });

  }else{
    return handleEcho({ isEcho: isEcho, message: message });
  }

}

module.exports = {
  handleMessage : handleMessage
}
