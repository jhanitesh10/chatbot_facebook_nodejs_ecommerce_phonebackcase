accessToken = "EAAGa4ywgfZBcBAGZCVCPMiupKFiHJRdUQZCdlcp1L2vgdD0IJjJFMbpQZAU971UCQsgAdfdIZC1KpAouLqpunaUc1JUNq3HiFgiqdygvTInKQLaJC0WuLVLcsZCpphOfrc1ylT8WjrOKo2YoX07HjGHTfmhKZB7kDoxkjonS0VzbAZDZD",
verifyToken = "nitesh";

// Local server
// const PORT = "1234",
//       DB_HOST = 'localhost',
//       DB_USER = 'root',
//       DB_PASS = '',
//       DB_NAME = 'nickscomputer',
//       DB_PORT = '3306';

// AWS server
const PORT = '1234',
  SHOPIFY_CLIENT_ID = '4f711decd71a57314e4ab383b6211d4c',
  SHOPIFY_SECRET_ID = 'b4738e36d18f3b87b287868804756044',
  DB_HOST = 'kik.cluster-cleiy5pbuugi.us-east-1.rds.amazonaws.com',
  DB_USER = 'gmdevUser',
  DB_PASS = 'gmdeVpw1!',
  DB_NAME = 'kikbotdb_dev',
  DB_PORT = '3306';




module.exports = {
  PORT : PORT,
  accessToken : accessToken,
  verifyToken : verifyToken,
  DB_HOST : DB_HOST,
  DB_USER : DB_USER,
  DB_PASS : DB_PASS,
  DB_NAME : DB_NAME,
  DB_PORT : DB_PORT
}

// const PORT = '443',
//   SHOPIFY_CLIENT_ID = '4f711decd71a57314e4ab383b6211d4c',
//   SHOPIFY_SECRET_ID = 'b4738e36d18f3b87b287868804756044',
//   DB_HOST = 'kik.cluster-cleiy5pbuugi.us-east-1.rds.amazonaws.com',
//   DB_USER = 'gmdevUser',
//   DB_PASS = 'gmdeVpw1!',
//   DB_NAME = 'kikbotdb',
//   DB_PORT = '3306';