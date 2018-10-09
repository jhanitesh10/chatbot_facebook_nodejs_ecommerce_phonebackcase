
/* database, server status 1 for production and 0 for local database*/
const PORT = '1234';
const databaseStatus = 0;
const statusForServer = 0;
/* instamojo credential */
const X_API_KEY_INSTAMOJO = "",
      X_AUTH_TOKEN_INSTAMOJO = "";

/* facebook credential */
const accessToken = "",
      verifyToken = "";


/* Dialog flow credential*/
const Dialogflow_private_key = "",
      Dialogflow_client_email = "",
      Project_Id = "",
      Session_Id = "",
      Language_Code = "en-US";

/* condition check for database*/
let DB_HOST = '',
    DB_USER = '',
    DB_PASS = '',
    DB_NAME = '',
    DB_PORT = '';

if(databaseStatus){

      DB_HOST = '';
      DB_USER = '';
      DB_PASS = '';
      DB_NAME = '';
      DB_PORT = '';

}else{

      DB_HOST = '';
      DB_USER = '';
      DB_PASS = '';
      DB_NAME = '';
      DB_PORT = '';
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
