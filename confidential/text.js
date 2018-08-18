
// // First:
// // Hey there 👋 thanks for checking out Freak! I’m Mr.Zeyn 😎 I was sent here to help show you around. 
// // One of the thoghest task is to deside the case which look cool on our phone  but don't worry! I got you coverd with all you need to give new loop for you phone.
// // Lets get started.What Brand do you have ?

// // brand: 
// // We can make phone look more classic😜\n - When we put case with Asskicking and Loving lines on it😎\ nChoose which Brand you or your love one own?
// // phone:
// // Oopps!iphone seems like you got lots of money in you pocket😜 ? #iphone\ nLet 's make our phone  look more cool with me😘

// // price:
// // Awesome!\nJust let me know how much bucks you got in your pockek?💸\n I wil sugget you something cool within that range sounds good!

// // category:
// // Wow👻you traveld long way to reach here - Thanks💖\n It's time for me to make this walk worthy!\nChoose category I will show you something great🎁

// // With product:
// Iam happy that i found these product for you😙\n If you confuse or not happy with above product Don 't worry I have surprise in "More" Opion🎁
// We have surprise for you ⛄ Choose what you want to explore?

// INSERT INTO product_attribute(brand_fk, phone_fk, price_fk, category_fk, product_fk, status) 
//     VALUES
//     (1, 1, 1, 1, 1, 1),
//     (1, 1, 1, 1, 2, 1),
//     (2, 2, 2, 2, 3, 1),
//     (2, 2, 2, 2, 4, 1);

// gif
// https: //media.giphy.com/media/aZ4sQUpybai5y/giphy.gif
// http: //www.reactiongifs.com/wp-content/uploads/2012/05/excited11.gif
// attache logo link
// https: //preview.ibb.co/cVQCse/Whats_App_Image_2018_08_18_at_14_42_39.jpg




// session practice 
/* session and coolies example */

// app.use(cookieParser());
// app.use(session({
//   secret: 'keyboardcat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60,
//     path: 'https://9de9d96b.ngrok.io/webook'
//   }
// }));


// app.get('/test', (req, res) => {
//   res.send("testing session");
// });

// app.get('/cookies', (req, res) => {
//   console.log("setting cookies!");

//   let options = {
//        key: "he",
//        maxAge: 1000 * 60, // would expire after 15 minutes
//        httpOnly: true, // The cookie only accessible by the web server
//        path: '/' // Indicates if the cookie should be signed
//    }

//    let arr = [1, 2, 3, 4, 5];
//    let obj = {
//      name: "nitesh",
//      age: 22,
//      stats: 1
//    }

//   res.cookie("name", arr, options);
//   res.cookie("name1", obj, options);

//   req.session.admin = arr;
//   req.session.user = obj;

//   res.status(200).send("hey ima working, my name is local server!!");

// });

//clear coolies and session

// app.get('/clear', (req, res) => {
//   console.log("clearing cookies");
//   res.clearCookie("name");
//   res.clearCookie("name1");

//   req.session.destroy((err)=>{
//     if(err){
//       console.log("Error while clearing session!");
//     }{
//       console.log("Session clear!");
//     }
//   });
//   res.status(200).send("hey ima working, my name is local server!!");

// });

//get session and  cookies
// app.get('/', (req, res) => {
//   console.log("getting cookies!");
//   console.log("cookies: ", req.cookies.name, req.cookies.name1, "session: ", req.session.admin, req.session.user, "************");

//   res.status(200).send("hey ima working, my name is local server!!");
// });
// let api = require('./api/paymentRequest.js'),
//     arq_addWebhook = api.arq_addWebhook;
//     arq_addWebhook({}).then( (data) => {
//       console.log(data.body);
//     });