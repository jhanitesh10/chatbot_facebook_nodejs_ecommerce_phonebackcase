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
  howToBuy = responseFunction.howToBuy;

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


let processingTextMessage = ({senderId, messageText}) => {

  let string = messageText;
  let message1;
  let response;

  return qr_insertUserText({ text: string, createdAt: currentDateTimeUnix, updatedAt: currentDateTimeUnix}).then( () => {


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
