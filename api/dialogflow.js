const dialogflow = require('dialogflow');

const confidential = require('../confidential/data.js'),
    Dialogflow_private_key = confidential.Dialogflow_private_key,
    Dialogflow_client_email = confidential.Dialogflow_client_email,
    Project_Id = confidential.Project_Id,
    Session_Id = confidential.Session_Id,
    Language_Code = confidential.Language_Code;


let sendToDialoglow = ({textMessege}) => {

  const config = {
    credentials: {
      private_key: Dialogflow_private_key,
      client_email: Dialogflow_client_email
    }
  };

  const sessionClient = new dialogflow.SessionsClient(config);
  const sessionPath = sessionClient.sessionPath(Project_Id, Session_Id);
  const requestData = {
    session: sessionPath,
    queryInput: {
      text: {
        text: textMessege,
        languageCode: Language_Code
      }
    }
  };
  
  return sessionClient
    .detectIntent(requestData)
    .then(response => {
      const result = response[0].queryResult;
      return {result:result, response:response};
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
    
}
// let testMessage = "show me the oneplus brand case";

// return sendToDialoglow({ textMessege: testMessage }).then((result) => {
//   console.log(result, "***");
// });


module.exports = {
    sendToDialoglow: sendToDialoglow
};

/* Dialogflow response */



// [{
//   platform: 'PLATFORM_UNSPECIFIED',
//   text: [Object],
//   message: 'text'
// }],
//   outputContexts: [],
//     queryText: 'hey',
//       speechRecognitionConfidence: 0,
//         action: 'input.welcome',
//           parameters: { fields: { } },
// allRequiredParamsPresent: true,
//   fulfillmentText: 'Good day! What can I do for you today?',
//     webhookSource: '',
//       webhookPayload: null,
//         intent:
// {
//   inputContextNames: [],
//     events: [],
//       trainingPhrases: [],
//         outputContexts: [],
//           parameters: [],
//             messages: [],
//               defaultResponsePlatforms: [],
//                 followupIntentInfo: [],
//                   name:
//   'projects/nickscomputer-dd4aa/agent/intents/b613ebc7-ccb6-4e77-9b11-ef9cdc1db749',
//     displayName: 'Default Welcome Intent',
//       priority: 0,
//         isFallback: false,
//           webhookState: 'WEBHOOK_STATE_UNSPECIFIED',
//             action: '',
//               resetContexts: false,
//                 rootFollowupIntentName: '',
//                   parentFollowupIntentName: '',
//                     mlDisabled: false
// },
// intentDetectionConfidence: 1,
//   diagnosticInfo: null,
//     languageCode: 'en-us' }


/*** response with action parameter **/
// @@@@@@@@@@@@@@@@@@@@@@@@@
// [ { responseId: '4fb1e1d7-8193-481a-89a6-866fa6c89147',
//     queryResult:
//      { fulfillmentMessages: [Array],
//        outputContexts: [],
//        queryText: 'show me the oneplus brand case',
//        speechRecognitionConfidence: 0,
//        action: '',
//        parameters: [Object],
//        allRequiredParamsPresent: true,
//        fulfillmentText: 'brand_available intent is not working!',
//        webhookSource: '',
//        webhookPayload: null,
//        intent: [Object],
//        intentDetectionConfidence: 1,
//        diagnosticInfo: [Object],
//        languageCode: 'en-us' },
//     webhookStatus:
//      { details: [],
//        code: 4,
//        message: 'Webhook call failed. Error: Request timeout.' } },  undefined,
//   undefined ]



// { fulfillmentMessages:
//    [ { platform: 'PLATFORM_UNSPECIFIED',
//        text: [Object],
//        message: 'text' } ],
//   outputContexts: [],
//   queryText: 'show me the oneplus brand case',
//   speechRecognitionConfidence: 0,
//   action: '',
//   parameters: { fields: { brand_available: [Object] } },
//   allRequiredParamsPresent: true,
//   fulfillmentText: 'brand_available intent is not working!',
//   webhookSource: '',
//   webhookPayload: null,
//   intent:
//    { inputContextNames: [],
//      events: [],
//      trainingPhrases: [],
//      outputContexts: [],
//      parameters: [],
//      messages: [],
//      defaultResponsePlatforms: [],
//      followupIntentInfo: [],
//      name:
//       'projects/nickscomputer-dd4aa/agent/intents/1245a601-dad1-4582-9469-e994a7dea43e',
//      displayName: 'brand_available',
//      priority: 0,
//      isFallback: false,
//      webhookState: 'WEBHOOK_STATE_UNSPECIFIED',
//      action: '',
//      resetContexts: false,
//      rootFollowupIntentName: '',
//      parentFollowupIntentName: '',
//      mlDisabled: false },
//   intentDetectionConfidence: 1,
//   diagnosticInfo: { fields: { webhook_latency_ms: [Object] } },
//   languageCode: 'en-us' }

/* result query along with the action parameters*/
// @@@@@@@@@@@@@@@@@@@@@@@@@
// queryText,
// parameters,
// allRequiredParamsPresent,
// fulfillmentMessages,
// inside object  'intent':
// displayName,
