'use strict';
const Promise = require('bluebird'),
      express = require('express'),
      app = express(),
      ejs = require('ejs'),
      bodyParser  = require('body-parser'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      cors = require('cors');

const request = Promise.promisify(require('request')),
      req = Promise.promisifyAll(request);

const confidential = require('./confidential/data.js'),
      PORT = confidential.PORT;

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
    editProduct = product.editProduct;


app.set("view engine", 'ejs');
app.set("views", './views');
app.use(express.static(__dirname + '/views'));

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






