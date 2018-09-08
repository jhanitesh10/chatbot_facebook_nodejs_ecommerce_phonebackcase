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

let qr_getProductAttribute = ({offset, limit}) => {
    let sqlQuery = `SELECT pa_id,
        br.br_id, br.title as brandTitle, pn.pn_id, pn.title as phoneTitle, pr.pr_id, pr.title as priceTitle, ct.ct_id, ct.title as categoryTitle, p.pr_id, p.title, p.subtitle, p.image, p.price, p.discount, p.shipping_cost, p.isAvailable,  p.product_count, p.status, p.top_status, p.created_on, p.updated_on 
        FROM product_attribute pa 
        INNER JOIN 
        brand br 
        ON 
        pa.brand_fk = br.br_id
        INNER JOIN 
        phone pn
        ON
        pa.phone_fk = pn.pn_id
        INNER JOIN
        price pr
        ON
        pa.price_fk = pr.pr_id
        INNER JOIN
        category ct
        ON
        pa.category_fk = ct.ct_id
        INNER JOIN
        product p
        ON
        pa.product_fk = p.pr_id ORDER BY pa_id LIMIT ?, ? `;
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


let qr_getProductAttributeCount = ({}) => {
    let sqlQuery = `SELECT pa_id FROM product_attribute ORDER BY pa_id`;
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
  qr_getProductCount : qr_getProductCount,
  qr_getProductAttribute : qr_getProductAttribute,
  qr_getProductAttributeCount : qr_getProductAttributeCount
};