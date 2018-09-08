const configuration = require('../configuration'),
      getConnection = configuration.getConnection,
      getQuery = configuration.getQuery;


let qr_getFacebookUser = ({offset, limit }) => {

    let sqlQuery = `SELECT user_id, name, firstname, lastname, gender, locale, timezone, picture, updated_on, created_on FROM facebook_user ORDER BY user_id LIMIT ?, ?`;
    let paramr = [offset, limit];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.length) {
            return row;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}



let qr_getFacebookUserCount = ({}) => {

    let sqlQuery = `SELECT user_id FROM facebook_user ORDER BY user_id`;
    let paramr = [];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.length) {
            return row;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}

let qr_getProduct = ({offset, limit }) => {

    let sqlQuery = `SELECT pr_id, product_type, product_id, title, subtitle, image, price, discount, shipping_cost, isAvailable, product_count, status, top_status, created_on, updated_on FROM product ORDER BY pr_id LIMIT ?, ?`;
    let paramr = [offset, limit];
    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.length) {
            return row;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}


let qr_getProductCount = ({}) => {

    let sqlQuery = `SELECT pr_id FROM product ORDER BY pr_id`;
    let paramr = [];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.length) {
            return row;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}

module.exports = {
  qr_getFacebookUser: qr_getFacebookUser,
  qr_getFacebookUserCount: qr_getFacebookUserCount,
  qr_getProduct : qr_getProduct,
  qr_getProductCount : qr_getProductCount
};