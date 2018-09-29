`use strict`;
let api = require('../../../api/facebookRequest.js'),
    arq_typingOn = api.arq_typingOn,
    arq_typingOff = api.arq_typingOff,
    arq_markSeen = api.arq_markSeen,
    arq_sendMessage = api.arq_sendMessage,
    arq_getUserDetail = api.arq_getUserDetail;

let responseFunction = require("./responseFunction.js"),
  whom = responseFunction.whom,
  brand = responseFunction.brand,
  more = responseFunction.more,
  help = responseFunction.help,
  topProductPrice = responseFunction.topProductPrice,
  initialTextReply = responseFunction.initialTextReply,
  contact = responseFunction.contact,
  feedback = responseFunction.feedback,
  frequentlyAskQuestion = responseFunction.frequentlyAskQuestion,
  about = responseFunction.about,
  howToBuy = responseFunction.howToBuy,
  brandAvailableIntent = responseFunction.brandAvailableIntent,
  phoneAvailableIntent = responseFunction.phoneAvailableIntent,
  brandUnavailableIntent = responseFunction.brandUnavailableIntent,
  phoneUnavailableIntent = responseFunction.phoneUnavailableIntent,
  abuseIntent = responseFunction.abuseIntent,
  contactMe = responseFunction.contactMe;

let errorResponse = require('./errorText.js'),
    errorMessage = errorResponse.errorMessage;

let greetingResponse = require('./greetingText.js'),
    greetingMessage = greetingResponse.greetingMessage;

let shortFunction = require('../../shortFunction/function.js'),
    currentDateTimeUnix = shortFunction.currentDateTimeUnix,
    currentDateTimeStatndard = shortFunction.currentDateTimeStatndard,
    jsonString = shortFunction.jsonString;


let query = require('../../../database/facebook/botQuery.js'),
    qr_insertUserText = query.qr_insertUserText;

let dialogflow = require("../../../api/dialogflow.js"),
    sendToDialoglow = dialogflow.sendToDialoglow;


let processingTextMessage = ({senderId, messageText}) => {

  let string = messageText;
  let message1;
  let response;

  
  return qr_insertUserText({senderId : senderId, text: string, createdAt: currentDateTimeUnix(), updatedAt: currentDateTimeUnix()}).then( () => {
    
    return sendToDialoglow({ textMessege: string }).then((result) => {
      let queryText =  result.result;
      let response = result.response;

      let intent = result.result.intent.displayName,
           dialogflowResponse = result.result.fulfillmentText,
           userText = result.result.queryText,
           dialogflowParameter = result.result.parameters.fields;

      if (intent === "brand_available"){
        
        return brandAvailableIntent({
          senderId: senderId,
          dialogflowResponse: dialogflowResponse
        });

      } else if (intent === "brand_unavailable"){
      
        return brandUnavailableIntent({
          senderId: senderId,
          dialogflowResponse: dialogflowResponse
        });

      } else if (intent === "Default Fallback Intent"){
        
      } else if (intent === "Default Welcome Intent"){
        return initialTextReply({ senderId: senderId });
      } else if (intent === "phone_available"){

        return phoneAvailableIntent({
          senderId: senderId,
          dialogflowResponse: dialogflowResponse
        });

      } else if (intent === "phone_unavailable"){
       
        return phoneUnavailableIntent({
          senderId: senderId,
          dialogflowResponse: dialogflowResponse
        });

      } else if (intent === "abusive_word"){
        return abuseIntent({ senderId: senderId, dialogflowResponse: dialogflowResponse});
      }else if(intent === "help"){
        return help({ senderId: senderId });
      } else if (intent === "contact_me"){
        return contactMe({senderId: senderId, dialogflowResponse: dialogflowResponse});
      }else {
        return help({ senderId: senderId });
      }

    });



  });
  


}

module.exports = {
  processingTextMessage : processingTextMessage
}
