'use strict';
const Promise = require('bluebird'),
      express = require('express'),
      app = express(),
      ejs = require('ejs'),
      bodyParser  = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      https = require('https'),
      fs = require('fs'),
      cors = require('cors');

const request = Promise.promisify(require('request')),
      req = Promise.promisifyAll(request);

const confidential = require('./confidential/data.js'),
      PORT = confidential.PORT,
      Dialogflow_private_key = confidential.Dialogflow_private_key,
      Dialogflow_client_email = confidential.Dialogflow_client_email,
      Project_Id = confidential.Project_Id,
      Session_Id = confidential.Session_Id,
      Language_Code = confidential.Language_Code;

let processEvent = require('./routes/facebook/index.js'),
    processRequestEndpoint = processEvent.processRequestEndpoint,
    verifyAccessToken = processEvent.verifyAccessToken;


let configuration = require('./database/configuration.js'),
      getConnection = configuration.getConnection,
      getQuery = configuration.getQuery;

let order = require('./routes/order/orderIndex.js'),
    buyProduct = order.buyProduct,
    orderPayment = order.orderPayment,
    paymentSuccess = order.paymentSuccess,
    paymentSuccessRedirect = order.paymentSuccessRedirect,
    buyProductAttache = order.buyProductAttache;

let user = require('./routes/dashboard/user.js'),
    facebookUser = user.facebookUser,
    getFacebookUserCount = user.getFacebookUserCount;

let product = require('./routes/dashboard/product.js'),
    getProductCount = product.getProductCount,
    productDetail = product.productDetail,
    getProductAttributeCount = product.getProductAttributeCount,
    getProductAttribute = product.getProductAttribute,
    getBrand = product.getBrand,
    getPhone = product.getPhone,
    getPrice = product.getPrice,
    getCategory = product.getCategory,
    addProduct = product.addProduct,
    editProduct = product.editProduct,
    editProductSave = product.editProductSave;

  let payment = require('./routes/dashboard/payment.js'),
      getCompletePayment = payment.getCompletePayment,
      getCompletePaymentCount = payment.getCompletePaymentCount;

  let completeOrder = require('./routes/dashboard/order.js'),
      getOrder = completeOrder.getOrder,
      getOrderCount = completeOrder.getOrderCount,
      downloadImage = completeOrder.downloadImage;


      
app.set("view engine", 'ejs');
app.set("views", './views');

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {res.send(200);});

app.use(cors());

app.use(bodyParser.urlencoded({
  limit : '50mb',
  extended : false
}));
app.use(bodyParser.json({
  limit : '50mb'
}));

/* facebook endpoint */
app.get('/webhook', verifyAccessToken);
app.post('/webhook', processRequestEndpoint);


/* orders endpoint */
app.post('/order/payment', orderPayment);

app.post('/paymentSuccess', paymentSuccess);
app.get('/redirect', paymentSuccessRedirect);

/* Buy product url endpoint */
app.get("/order/:userId/:productId", buyProduct);
app.get("/order/attach/:userId/:productId", buyProductAttache);






/* Dashboard endpoint */

app.get("/dashboard/facebookUser", facebookUser);
app.get("/dashboard/facebookUser/Count", getFacebookUserCount);

app.get("/dashboard/productCount", getProductCount);
app.get("/dashboard/productDetail", productDetail);

app.get("/dashboard/productAttribute", getProductAttribute);
app.get("/dashboard/productAttributeCount", getProductAttributeCount);

app.get('/dashboard/brand', getBrand);
app.get('/dashboard/phone', getPhone);
app.get('/dashboard/price', getPrice);
app.get('/dashboard/category', getCategory);

app.post('/dashboard/product/add', addProduct);

app.get('/dashboard/product/edit', editProduct);
app.post("/dashboard/productAttribute/editSucess", editProductSave);

app.get("/dashboard/completePayment", getCompletePayment);
app.get("/dashboard/completePayment/count", getCompletePaymentCount);

app.get("/dashboard/order", getOrder);
app.get('/dashboard/order/count', getOrderCount);

app.get("/dashboard/image/download", downloadImage);


/*Dialogflow integration */
const dialogflow = require('dialogflow');
const config = {
  credentials: {
    private_key: Dialogflow_private_key,
    client_email: Dialogflow_client_email
  }
};
const sessionClient = new dialogflow.SessionsClient(config);
const sessionPath = sessionClient.sessionPath(Project_Id, Session_Id);
let testMessage = "i want to buy apple";

const requestData = {
  session: sessionPath,
  queryInput: {
    text: {
      text: testMessage,
      languageCode: Language_Code
    }
  }
};

sessionClient
  .detectIntent(requestData)
  .then(responses => {
    const result = responses[0].queryResult;
    console.log(result);
    return;
    // return sendTextMessage(userId, result.fulfillmentText);
  })
  .catch(err => {
    console.error("ERROR:", err);
  });
  

app.post('/dialogflow', (req, res) => {
  console.log("***********************");

  res.status(200);
  return;
});








let statusForServer = 0;

if (statusForServer) {


  /* AWS server configuration */
  let server = https.createServer({
    key: fs.readFileSync('./cert/convrg.io.key'),
    cert: fs.readFileSync('./cert/STAR_convrg_io.crt'),
    ca: fs.readFileSync('./cert/bundle.crt'),
  }, app);

  server.listen(PORT, (err, req, res) => {

    if (!err) {
      console.log("LISTING TO AWS Sever @  PORT : ", PORT);
    }

  });

} else {

/*local server*/
app.listen(PORT, (err) => {
  if (!err) {
    console.log("Listening to Local Server @ PORT :", PORT);
  }
});

}






// //
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