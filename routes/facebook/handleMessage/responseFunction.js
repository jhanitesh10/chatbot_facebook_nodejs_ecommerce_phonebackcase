'use strict';
const Promise = require('bluebird');

const configuration = require('../../../database/configuration'),
      getConnection = configuration.getConnection,
      getQuery = configuration.getQuery;

const api = require('../../../api/facebookRequest'),
      arq_sendMessage = api.arq_sendMessage;

let query = require('../../../database/facebook/botQuery'),
    qr_getWhom = query.qr_getWhom,
    qr_getText = query.qr_getText,
    qr_getBrand = query.qr_getBrand,
    qr_getPhone = query.qr_getPhone,
    qr_getPrice = query.qr_getPrice,
    qr_getCategory = query.qr_getCategory,
    qr_more = query.qr_more,
    qr_help = query.qr_help,
    qr_topProductPrice = query.qr_topProductPrice;

let response;






let  whom = ( {senderId} ) => {
  let quickReplyArray = [];

  return qr_getText({textId : 1}).then( (textRow) => {
    return qr_getWhom({status : 1}).then((whomRow) => {

      if(whomRow.length <= 11){

        return Promise.each(whomRow, (rowData) => {
          let quickReplyObj = {
            content_type : rowData.content_type,
            title : rowData.title,
            payload : rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        });

      }else{

      }

    }).then(() => {

      response = {
        "text" : `${textRow[0].text}`,
        "quick_replies" : quickReplyArray
      }

      return arq_sendMessage({senderId : senderId, response : response}).then( (messgeData) => {
        console.log("sendMessage!");
      });
    });
  });


}




let  brand = ( {senderId} ) => {
  let quickReplyArray = [];

  return qr_getText({textId : 1}).then( (textRow) => {
    return qr_getBrand({status : 1}).then((brandRow) => {

      if(brandRow.length <= 11){

        return Promise.each(brandRow, (rowData) => {
          
          let quickReplyObj = {
            content_type : rowData.content_type,
            title : rowData.title,
            payload : rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        }).then( () => {
        });

      }else{

      }

    }).then(() => {
      
      response = {
        "text" : `${textRow[0].text}`,
        "quick_replies" : quickReplyArray
      }

    }).then(() => {

        return arq_sendMessage({senderId : senderId, response : response}).then( (messgeData) => {
          console.log("sendMessage!");
        });
    });
  });


}


let  phone = ( {senderId, brand} ) => {
  let quickReplyArray = [];
  return qr_getText({textId : (brand+1)}).then( (textRow) => {
    return qr_getPhone({status : 1, brand : brand}).then((phoneRow) => {

      if(phoneRow && phoneRow.length <= 11){

        return Promise.each(phoneRow, (rowData) => {
          let quickReplyObj = {
            content_type : rowData.content_type,
            title : rowData.title,
            payload : rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        });

      }else{

      }

    }).then(() => {

      response = {
        "text" : `${textRow[0].text}`,
        "quick_replies" : quickReplyArray
      }

    }).then( () => {      
      return arq_sendMessage({senderId : senderId, response : response}).then( (messgeData) => {
        console.log("sendMessage!");
      });
    });
  });


}


let  price = ( {senderId, status} ) => {
  let quickReplyArray = [];
  return qr_getText({textId : 11}).then( (textRow) => {
    return qr_getPrice({status : 1}).then((priceRow) => {

      if(priceRow && priceRow.length <= 11){

        return Promise.each(priceRow, (rowData) => {
          let quickReplyObj = {
            content_type : rowData.content_type,
            title : rowData.title,
            payload : rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        });

      }else{

      }

    }).then(() => {

      response = {
        "text" : `${textRow[0].text}`,
        "quick_replies" : quickReplyArray
      }

    }).then( () => {
        return arq_sendMessage({senderId : senderId, response : response}).then( (messgeData) => {
          console.log("sendMessage!");
        });
    });
  });


}


let  category = ( {senderId, status} ) => {
  let quickReplyArray = [];
  return qr_getText({textId : 12}).then( (textRow) => {
    return qr_getCategory({status : 1}).then((categoryRow) => {

      if(categoryRow && categoryRow.length <= 11){

        return Promise.each(categoryRow, (rowData) => {
          let quickReplyObj = {
            content_type : rowData.content_type,
            title : rowData.title,
            payload : rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        });

      }else{

      }

    }).then(() => {

      response = {
        "text" : `${textRow[0].text}`,
        "quick_replies" : quickReplyArray
      }

    }).then( () => {
        return arq_sendMessage({senderId : senderId, response : response}).then( (messgeData) => {
          console.log("sendMessage!");
        });
    });
  });


}


let more = ({
  senderId
}) => {
  let quickReplyArray = [];
  return qr_getText({
    textId: 13
  }).then((textRow) => {
    return qr_more({
      status: 1
    }).then((moreRow) => {

      if (moreRow && moreRow.length <= 11) {

        return Promise.each(moreRow, (rowData) => {
          let quickReplyObj = {
            content_type: rowData.content_type,
            title: rowData.title,
            payload: rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        });

      } else {

      }

    }).then(() => {

      response = {
        "text": `${textRow[0].text}`,
        "quick_replies": quickReplyArray
      }

    }).then( () => {
      return arq_sendMessage({
        senderId: senderId,
        response: response
      }).then((messgeData) => {
        console.log("sendMessage!");
      });
    });
  });


}


let help = ({
  senderId
}) => {
  let quickReplyArray = [];
  return qr_getText({
    textId: 14
  }).then((textRow) => {
    return qr_help({
      status: 1
    }).then((helpRow) => {

      if (helpRow && helpRow.length <= 11) {

        return Promise.each(helpRow, (rowData) => {
          let quickReplyObj = {
            content_type: rowData.content_type,
            title: rowData.title,
            payload: rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        });

      } else {

      }

    }).then(() => {

      response = {
        "text": `${textRow[0].text}`,
        "quick_replies": quickReplyArray
      }

      return arq_sendMessage({
        senderId: senderId,
        response: response
      }).then((messgeData) => {
        console.log("sendMessage!");
      });
    });
  });


}


let topProductPrice = ({
  senderId
}) => {
  let quickReplyArray = [];
  return qr_getText({
    textId: 4
  }).then((textRow) => {
    return qr_topProductPrice({
      status: 1
    }).then((topProductPrice) => {

      if (topProductPrice && topProductPrice.length <= 11) {

        return Promise.each(topProductPrice, (rowData) => {
          let quickReplyObj = {
            content_type: rowData.content_type,
            title: rowData.title,
            payload: rowData.payload
          };
          return quickReplyArray.push(quickReplyObj);
        });

      } else {

      }

    }).then(() => {

      response = {
        "text": `${textRow[0].text}`,
        "quick_replies": quickReplyArray
      }

      return arq_sendMessage({
        senderId: senderId,
        response: response
      }).then((messgeData) => {
        console.log("sendMessage!");
      });
    });
  });


}


let attachmentText = ({senderId}) => {

  let text1 = response = {
    "text": "first text"
  }

 let text2 = response = {
   "text": "second text"
 }
 let textArray = [text1, text2];

  return Promise.each(textArray, (text) => {

    return arq_sendMessage({
      senderId: senderId,
      response: text
    }).then((messgeData) => {
      console.log("sendMessage!");
    });

  })

}


let afterAttachmentPrice = ({ senderId }) => {


  let text1 = response = {
    "text": "Great!"
  }

  let text2 = {
    "text": "Finally you are at your destiny🚶, Just attache the image you want to put on you phone📱",
    "quick_replies": [{
      "content_type": "text",
      "title": "PreviouMenu",
      "payload": "morePreviousMenu"
    }]
  }

  let image = {

        "attachment": {
          "type": "image",
          "payload": {
            "url": "https://preview.ibb.co/cVQCse/Whats_App_Image_2018_08_18_at_14_42_39.jpg",
            "is_reusable": true
          }
        }

  }
  
  let textArray = [image, text1, text2];

    return Promise.each(textArray, (text) => {

      return arq_sendMessage({
        senderId: senderId,
        response: text
      }).then((messgeData) => {
        console.log("sendMessage!");
      });

   });


}


let initialTextReply = ({
    senderId
  }) => {
    let multipleMessageArr = [];

    multipleMessageArr.push({
      text: `Hey there 👋\n thanks for checking out Freak! I’m Mr Noone 😎 I was sent here to help show you around.`
    });

    multipleMessageArr.push({
      text: "One of the thoughest task is to deside the case which look cool on our phone  but don't worry! I got you coverd with all you need to give new loop for you phone."
    });


    //  multipleMessageArr.push({
    //    "attachment": {
    //      "type": "template",
    //      "payload": {
    //        "template_type": "media",
    //        "elements": [{
    //          "media_type": "video",
    //          "url": "https://www.facebook.com/verge/videos/1707009672673539/"
    //        }]
    //      }
    //    }
    //  });


    Promise.each(multipleMessageArr, (textValue) => {

        return arq_sendMessage({
          senderId: senderId,
          response: textValue
        })

      }).then( () => {
        brand({senderId : senderId});
      });

}



let contact = ({ senderId }) => {
  
  response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text: "Need further assistance? Talk to a representative or send us an emsil.",
        buttons: [
          {
            type: "phone_number",
            title: "Call Representative",
            payload: "+9190042250810"
          },
          {
            "type":"web_url",
            "url":"https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
            "title":"Send and email"
          },
          {
            "type":"postback",
            "title":"Buy",
            "payload":"mainMenu"
          }
        ]
      }
    }
  }

  return arq_sendMessage({
    senderId: senderId,
    response: response
  });

};



let feedback = ({ senderId }) => {




  let text1 = {
    "text": "Thanks for giving  you valuable time. you can click on the button and provide a feedback click on link https://giphy.com/gifs/FeedbackPanda-5zqF8kPPhvqasteBZF/links",
    "quick_replies": [{
      "content_type": "text",
      "title": "Buy",
      "payload": "mainMenu"
    }
  ]
  }

  let image = {

        "attachment": {
          "type": "image",
          "payload": {
            "url": "https://media.giphy.com/media/5zqF8kPPhvqasteBZF/giphy.gif",
            "is_reusable": true
          }
        }

  }
  
  let textArray = [image, text1];

    return Promise.each(textArray, (text) => {

      return arq_sendMessage({
        senderId: senderId,
        response: text
      });

   });


}


let frequentlyAskQuestion = ({ senderId }) => {




  let text1 = {
    "text": "Thanks for giving  you valuable time. you can click on the button and provide a feedback click on link https://giphy.com/gifs/FeedbackPanda-5zqF8kPPhvqasteBZF/links",
    "quick_replies": [{
      "content_type": "text",
      "title": "Buy",
      "payload": "mainMenu"
    }
  ]
  }

  let image = {

        "attachment": {
          "type": "image",
          "payload": {
            "url": "https://media.giphy.com/media/YkCgHUorYfITm/giphy.gif",
            "is_reusable": true
          }
        }

  }
  
  let textArray = [image, text1];

    return Promise.each(textArray, (text) => {

      return arq_sendMessage({
        senderId: senderId,
        response: text
      });
   });


}


let about = ({ senderId }) => {



  let image = {

        "attachment": {
          "type": "image",
          "payload": {
            "url": "https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif",
            "is_reusable": true
          }
        }

  }

  let text1 = {
    "text": "Thanks for giving  you valuable time. you can click on the button and provide a feedback"
  }

    let text2 = {
    "text": "Thanks for giving  you valuable time. you can click on the button and provide a feedback click on link https://giphy.com/gifs/FeedbackPanda-5zqF8kPPhvqasteBZF/links",
    "quick_replies": [{
      "content_type": "text",
      "title": "Buy",
      "payload": "mainMenu"
    }
  ]
  }

  let textArray = [image, text1, text2];

    return Promise.each(textArray, (text) => {

      return arq_sendMessage({
        senderId: senderId,
        response: text
      });

   });


}




let howToBuy = ({ senderId }) => {



  let video = {

    "attachment":{
       "type":"video",
       "payload":{
         "url":"https://www.rmp-streaming.com/media/bbb-360p.mp4",
         "is_reusable": true
        }

    }

  }

  let text1 = {
    "text": "Thanks for giving  you valuable time. you can click on the button and provide a feedback"
  }

    let text2 = {
    "text": "Thanks for giving  you valuable time. you can click on the button and provide a feedback click on link https://giphy.com/gifs/FeedbackPanda-5zqF8kPPhvqasteBZF/links",
    "quick_replies": [{
      "content_type": "text",
      "title": "Buy",
      "payload": "mainMenu"
    }
    ]
  }

  let textArray = [video, text1, text2];

    return Promise.each(textArray, (text) => {

      return arq_sendMessage({
        senderId: senderId,
        response: text
      });

   });


}

module.exports = {
  whom: whom,
  brand: brand,
  phone: phone,
  price: price,
  category: category,
  more: more,
  help: help,
  topProductPrice: topProductPrice,
  attachmentText: attachmentText,
  afterAttachmentPrice: afterAttachmentPrice,
  initialTextReply: initialTextReply,
  contact: contact,
  feedback: feedback,
  frequentlyAskQuestion: frequentlyAskQuestion,
  about: about,
  howToBuy : howToBuy
};
