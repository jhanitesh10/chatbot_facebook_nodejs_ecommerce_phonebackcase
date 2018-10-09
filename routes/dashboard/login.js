let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
   qr_getLoginData = dashboardQuery.qr_getLoginData;

let checkUserLogin = (req, res) => {
   let email = req.query.email,
      password = req.query.password;

      return qr_getLoginData({email : email, password: password}).then((queryResponse) => {
         res.json(queryResponse);
      });
}

module.exports = {
   checkUserLogin: checkUserLogin
}