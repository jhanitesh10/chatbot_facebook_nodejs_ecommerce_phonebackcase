
/* database, server status 1 for production and 0 for local database*/
const PORT = '1234';
const databaseStatus = 0;
const statusForServer = 0;
/* instamojo credential */
const X_API_KEY_INSTAMOJO = "test_6cea3217740b750f3caa259966f",
      X_AUTH_TOKEN_INSTAMOJO = "test_d6cc511e2ba011aeb3abdbf6eac";

/* facebook credential */
const accessToken = "EAAGa4ywgfZBcBAGZCVCPMiupKFiHJRdUQZCdlcp1L2vgdD0IJjJFMbpQZAU971UCQsgAdfdIZC1KpAouLqpunaUc1JUNq3HiFgiqdygvTInKQLaJC0WuLVLcsZCpphOfrc1ylT8WjrOKo2YoX07HjGHTfmhKZB7kDoxkjonS0VzbAZDZD",
      verifyToken = "nitesh";


/* Dialog flow credential*/
const Dialogflow_private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC1YQqHb/9EKrJw\nsp/ME6c5FimypqeIbnQcGufbWDah6dNo5ier1sYXM9q9MNBA8LK4FrHkNsMyl/lo\nQ9LAY2y+zmdtEULYrrKCQqmMHugcPOna8hMjpgEGfe/LwE70kK5usZ/mBhzrvuPF\nTbCYxDlWdXllg26ZOj/GQE4HgLPuBRQz6puM0Hc53nbNZah3A6qffZSpGcg4G40y\nJG7iV+xnyEAj44jIYk+DjI4YMMJMJGSpecpkymcKdfQCS/E1WM8IAkxPnKav09rC\nqndudVbPSntKtx8xiBjpRswTJtWKcGoluw/Gz/brhrCtwdB4wZKRrqwfDX3yiq8X\nepMrUn0HAgMBAAECggEAEgByI5QVkUXtlOrdmksfDzboZ49L1GomAv4WofoE3hgP\nf/tL163G1lmyrZFRMgjRrBywhjZ7NCPKQLNukOKtUdi5giUy7b+U/wGvwzT0E41m\nJnFdPe4FbwgDy0SocXSEo37koFdd+nXlNFlsHBVpnW+mX1FmojWaS8ppFCyNbyON\n63bslnpMorwBDM6TFqKvhPBIgSxeXPXtu9ENVWcHn3kdaInYIFXig8v/secmgUV8\nUS21JqYQEbhcLGSNnnJQ9mCeW9fYOjTnxS52Wnr5SJsAJ23rRhmt3PhtBIEOaaK2\nFHDb7MxzRkcZm28nX5ZGkhSGQAawNTSnP2POhtSvpQKBgQDuIK46Q7ZXA25Oanbs\n7MsmBxhAqJDLI0SjJQ+b9fI+pd47HSYQUadp7DnbapttjTRE6gIovVNLMd2yxc9t\nNIonSSFR+A3sjmsfE30jbW9avhaIW2YF40vmLMuIbccxt+obr3+plkyqUrmM/MEl\nzML2OWw9hXWj35FpMPw2CpHOVQKBgQDC/gI6Oiudn6KGJKUFNWofL6dpUNlLvms+\nmcrYiJyo9K0ALekScUJKxZFBvvc3aHNWhuPe9XubSzTIhGw4okDz3/SboUkZ4ozY\nLPQ9KMf3epxGbyqUZR+RMCQ0ypVEgs0pNEB2Pbjhol6/HMC38gt5cMF28RZHN111\nhWWXczzB6wKBgQCdgvR8CcoU6GoQaI/dzAvcTZkXO+j61YtTNvKKQTdJhUHobDF/\nXeOVRvJGVtAUuPA4HWnsNL9h38w7smiwXa58qfzmUWQ0c0gcODHwOzULGu2gqIRl\npKHR0ROYXLUECBlM0tto+8geabXeslm4fScA457bWuojyYBPyl0qCffEOQKBgQC4\nGYKY3xsW8wVLiYWUaV4Mm72AHalLbjlrHWD7F+BxVLGSHcaUdwKT/fyrClX2plNf\nOnQiqbtOX68yMnTK88ZHewdDeP+/xLod0DO5GqvR6J1rksGs4dzwA3frr+lGigiS\nApdqC9RmlBrIbak3Avv6aI8AcZcLHibLMms8lryiiQKBgQC+0arQg69NRzHbB0Ax\ndUkx/VDleCboGG0KTPg4Sh3qI4hLSeRNVSnWqU/Uo/jy75qmrU8IaMCF1QD5tPDg\nz0Fllrcw7eLsgWRnAp/z0WxTiuYwCU5APRuuRPrS/L4W0bQQFkCEkDxBsCSod06r\niHbvQioC5tx9MM1z3e54nb2QUQ==\n-----END PRIVATE KEY-----\n",
      Dialogflow_client_email = "dialogflow-rauirf@nickscomputer-dd4aa.iam.gserviceaccount.com",
      Project_Id = "nickscomputer-dd4aa",
      Session_Id = "123456",
      Language_Code = "en-US";

/* condition check for database*/
let DB_HOST = '',
    DB_USER = '',
    DB_PASS = '',
    DB_NAME = '',
    DB_PORT = '';

if(databaseStatus){

      DB_HOST = 'kik.cluster-cleiy5pbuugi.us-east-1.rds.amazonaws.com';
      DB_USER = 'gmdevUser';
      DB_PASS = 'gmdeVpw1!';
      DB_NAME = 'kikbotdb_dev';
      DB_PORT = '3306';

}else{

      DB_HOST = 'localhost';
      DB_USER = 'root';
      DB_PASS = '';
      DB_NAME = 'nickscomputer';
      DB_PORT = '3306';
}





module.exports = {

  PORT : PORT,
  accessToken : accessToken,
  verifyToken : verifyToken,
  DB_HOST : DB_HOST,
  DB_USER : DB_USER,
  DB_PASS : DB_PASS,
  DB_NAME : DB_NAME,
  DB_PORT : DB_PORT,
  Dialogflow_private_key : Dialogflow_private_key,
  Dialogflow_client_email : Dialogflow_client_email,
  Project_Id : Project_Id,
  Session_Id : Session_Id,
  Language_Code : Language_Code,
  statusForServer : statusForServer,
  X_API_KEY_INSTAMOJO : X_API_KEY_INSTAMOJO,
  X_AUTH_TOKEN_INSTAMOJO : X_AUTH_TOKEN_INSTAMOJO
}
