const port = '1234',
      accessToken = 'EAAGa4ywgfZBcBAAjGpkjJZCgCj477xQEiGNlx7lO7Ew0SsDNcHO2nwQWdOqkWCCxgITdgSpcaNr5spZAjgfv6pGNVwhSm7MmpcIX381BmyXrjB4cEwRFcPkiZBLzlR2OXQmGcVZCEThaiDnS6dtp5OUyICpyS5xw3WxpyzzTIJwZDZD',
      verifyToken = 'nitesh';

const DB_HOST = 'localhost',
      DB_USER = 'root',
      DB_PASS = '',
      DB_NAME = 'nickscomputer',
      DB_PORT = '3306';

module.exports = {
  PORT : port,
  accessToken : accessToken,
  verifyToken : verifyToken,
  DB_HOST : DB_HOST,
  DB_USER : DB_USER,
  DB_PASS : DB_PASS,
  DB_NAME : DB_NAME,
  DB_PORT : DB_PORT
}

// curl - X POST - H "Content-Type: application/json" - d '{
// "whitelisted_domains": [
//       "https://56c78928.ngrok.io"
// ]
// }
// ' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAAGa4ywgfZBcBAAjGpkjJZCgCj477xQEiGNlx7lO7Ew0SsDNcHO2nwQWdOqkWCCxgITdgSpcaNr5spZAjgfv6pGNVwhSm7MmpcIX381BmyXrjB4cEwRFcPkiZBLzlR2OXQmGcVZCEThaiDnS6dtp5OUyICpyS5xw3WxpyzzTIJwZDZD"