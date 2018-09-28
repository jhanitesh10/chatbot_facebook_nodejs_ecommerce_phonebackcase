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
    
    console.log(
      
        result.result.queryText,
        result.result.parameters.fields,
        result.result.allRequiredParamsPresent,
        result.result.fulfillmentText,
        result.result.intent.displayName

    );
    });

    if (string.match(/(hey)|(hello)|(hi)|(what's up?)/i)) {
      return initialTextReply({ senderId: senderId });
    }
    else if (string.match(/(What)/i) && string.match(/(your name?)/i)) {
      message1 = "My name is The Freak😜";
      response = {
        text: message1
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(how are you?)/i)) {
      message1 = "I'm handsome😇, How about YOu?😃 Iam here to help you with customized case. Say, buy  :)";
      response = {
        text: message1
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(Thanks)/i) || string.match(/(Thank you)/i)) {
      message1 = "No problem, I'ts my pleasure to help  you :)";
      response = {
        text: message1
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(time)/i)) {
      let currentTime = jsonString(currentDateTimeStatndard());
      response = {
        text: currentTime
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(i love you)/i)) {
      message1 = "I loved you too😍, but we would never be together😢"
      response = {
        text: message1
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(who made you)/i)) {
      message1 = "I was made by Nitesh 😍. What to know more? You can connect with him @ contact : 9004250810, email : jhanitesh10@gmail.com"
      response = {
        text: message1
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(fuck)|(whore)|(faggot)|(cunt)|(wanker)/gi)) {
      message1 = "No need for that kind of language mate."
      response = {
        text: message1
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(Who am i)/i)) {
      message1 = "Your name is " + "name" + " :)";
      reponse = {
        text: message1
      }
      return arq_sendMessage({ senderId: senderId, response: response });
    }
    else if (string.match(/(help me)/i) || string.match(/(help)/i) || string.match(/(What can you do?)/i)) {

      help({ senderId: senderId });
    }

    else {
      response = {
        text: errorMessage()
      }
      return arq_sendMessage({ senderId: senderId, response: response });

    }

  });
  


}

module.exports = {
  processingTextMessage : processingTextMessage
}
