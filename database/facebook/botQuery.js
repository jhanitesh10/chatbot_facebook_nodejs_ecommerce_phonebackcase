const configuration = require('../../database/configuration'),
      getConnection = configuration.getConnection,
      getQuery = configuration.getQuery;


let qr_getWhom = ({status}) => {
  let sqlQuery = `SELECT w_id, content_type, title, payload FROM whom WHERE status = ?`;
  let paramr = [status];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch( (err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}



let qr_getText = ({textId}) => {
  let sqlQuery = `SELECT text FROM text WHERE text_id = ?`;
  let paramr = [textId];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch( (err) => {
    console.log("error, while making query for qr_getText query function!!!", err);
  });
}


let qr_getBrand = ({status}) => {
  let sqlQuery = `SELECT br_id, content_type, title, payload FROM brand WHERE status = ?`;
  let paramr = [status];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch( (err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}

let qr_getPhone = ({status, brand}) => {
  let sqlQuery = `SELECT b.content_type, p.title, p.payload, p.pn_id FROM brand as b INNER JOIN phone as p ON b.br_id = p.br_id WHERE p.status = ? AND b.br_id = ?`;
  let paramr = [status, brand];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch( (err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}


let qr_getPrice = ({status}) => {
  let sqlQuery = `SELECT pr_id, content_type, title, payload FROM price WHERE status = ${status}`;
  let paramr = [status];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch( (err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}



let qr_getCategory = ({status}) => {
  let sqlQuery = `SELECT ct_id, content_type, title, payload FROM category WHERE status = ${status};`;
  let paramr = [status];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch( (err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}


let qr_more = ({
  status
}) => {
  let sqlQuery = `SELECT m_id, content_type, title, payload FROM more WHERE status = ?`;
  let paramr = [status];

  return getQuery({
    sqlQuery: sqlQuery,
    paramr: paramr
  }).then((row) => {

    if (row.length) {
      return row;
    } else {
      return 0;
    }

  }).catch((err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}

let qr_help = ({
  status
}) => {
  let sqlQuery = `SELECT h_id, content_type, title, payload FROM help WHERE status = ?`;
  let paramr = [status];

  return getQuery({
    sqlQuery: sqlQuery,
    paramr: paramr
  }).then((row) => {

    if (row.length) {
      return row;
    } else {
      return 0;
    }

  }).catch((err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}


let qr_topProductPrice = ({status}) => {
  let sqlQuery = `SELECT tpr_id, content_type, title, payload FROM topProduct_price WHERE status = ?`;
  let paramr = [status];

  return getQuery({
    sqlQuery: sqlQuery,
    paramr: paramr
  }).then((row) => {

    if (row.length) {
      return row;
    } else {
      return 0;
    }

  }).catch((err) => {
    console.log("error, while making query for qr_getWhome query function!!!", err);
  });
}


let qr_checkFacebookUser = ({senderId}) => {
  let sqlQuery = `SELECT facebookid FROM facebook_user WHERE facebookid = ? `;
  let paramr = [senderId];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch((err) => {
    console.log("error ", err);
  })
}


let qr_insertFacebookUser = ({userDetailObj}) => {
  let sqlQuery = `INSERT INTO facebook_user
  (
    facebookid,
    name,
    firstname,
    lastname,
    gender,
    locale,
    timezone,
    photos,
    picture,
    created_on,
    updated_on
  )
  VALUES
  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  let paramr = [
  userDetailObj.facebookId,
  userDetailObj.name,
  userDetailObj.firstName,
  userDetailObj.lastName,
  userDetailObj.gender,
  userDetailObj.locale,
  userDetailObj.timezone,
  userDetailObj.photos,
  userDetailObj.picture,
  userDetailObj.createdOn,
  userDetailObj.updatedOn
  ];

  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row){
      return row.insertId;
    }else{
      return 0;
    }

  }).catch((err) => {
    console.log("error", err);
  })

}


let qr_UpdateFacebookUser = ({
  userDetailObj
}) => {
  let sqlQuery = `UPDATE  facebook_user SET 
    name = ?,
    firstname = ?,
    lastname = ?,
    gender = ?,
    locale = ?,
    timezone = ?,
    photos = ?,
    picture = ?,
    updated_on = ? 
    WHERE 
    facebookid = ?`;

  let paramr = [
    userDetailObj.name,
    userDetailObj.firstName,
    userDetailObj.lastName,
    userDetailObj.gender,
    userDetailObj.locale,
    userDetailObj.timezone,
    userDetailObj.photos,
    userDetailObj.picture,
    userDetailObj.updatedOn,
    userDetailObj.facebookId
  ];

  return getQuery({
    sqlQuery: sqlQuery,
    paramr: paramr
  }).then((row) => {

    if (row) {
      return row.affectedRows;
    } else {
      return 0;
    }

  }).catch((error) => {
    console.log("error, error while doing qr_updateFacebookUser @ botQuery.js inside facebook/botQuery.js", error);
  });

}



module.exports = {
  qr_getWhom : qr_getWhom,
  qr_getText : qr_getText,
  qr_getBrand : qr_getBrand,
  qr_getPhone : qr_getPhone,
  qr_getPrice : qr_getPrice,
  qr_getCategory : qr_getCategory,
  qr_more : qr_more,
  qr_checkFacebookUser : qr_checkFacebookUser,
  qr_insertFacebookUser : qr_insertFacebookUser,
  qr_help : qr_help,
  qr_topProductPrice: qr_topProductPrice,
  qr_UpdateFacebookUser: qr_UpdateFacebookUser
}
