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

    let sqlQuery = `SELECT pr_id, product_type, title, subtitle, image, price, discount, shipping_cost, isAvailable, product_count, status, top_status, created_on, updated_on FROM product ORDER BY pr_id LIMIT ?, ?`;
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

let qr_getProductAttribute = ({ offset, limit, brandId, phoneId, priceId, categoryId}) => {
    let sqlQuery = `SELECT pa_id,
        br.br_id, br.title as brandTitle, pn.pn_id, pn.title as phoneTitle, pr.pr_id, pr.title as priceTitle, ct.ct_id, ct.title as categoryTitle, p.pr_id as priceId,p.pr_id as productId, p.product_type, p.title, p.subtitle, p.image, p.price, p.discount, p.shipping_cost, p.isAvailable,  p.product_count, p.status, p.top_status, p.created_on, p.updated_on 
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
        pa.product_fk = p.pr_id WHERE br.br_id = ? AND pn.pn_id = ? AND pr.pr_id = ? AND ct.ct_id= ? ORDER BY pa_id LIMIT ?, ? `;
    let paramr = [brandId, phoneId, priceId, categoryId, offset, limit];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.length) {
            return row;
        } else {
            return [];
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });   
}


    let qr_getProductAttributeCount = ({brandId, phoneId, priceId, categoryId}) => {
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
        pa.product_fk = p.pr_id WHERE br.br_id = ? AND pn.pn_id = ? AND pr.pr_id = ? AND ct.ct_id=? ORDER BY pa_id`;
        let paramr = [brandId, phoneId, priceId, categoryId];

        return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

            if (row.length) {
                return row;
            } else {
                return [];
            }

        }).catch((err) => {
            console.log("error, while making query for qr_getWhome query function!!!", err);
        });
    }

    let qr_getBrand = ({}) => {
        let sqlQuery = `SELECT br_id, title FROM brand ORDER BY br_id`;
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

    let qr_getPhone = ({brandId}) => {
        let sqlQuery = `SELECT pn_id, title FROM phone WHERE br_id = ? ORDER BY br_id`;
        let paramr = [brandId];

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

    let qr_getPrice = ({  }) => {
        let sqlQuery = `SELECT pr_id, title FROM price ORDER BY pr_id`;
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

    let qr_getCategory = ({  }) => {
        let sqlQuery = `SELECT ct_id, title FROM category ORDER BY ct_id`;
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

    let qr_insertProduct = ({productDetailObj}) => {
        let sqlQuery = `INSERT INTO product 
        (product_type, title, subtitle, image, price, discount, shipping_cost, isAvailable, product_count, status, top_status, created_on, updated_on) 
        VALUES
        (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        let paramr = [
            productDetailObj.productType,
            productDetailObj.title,
            productDetailObj.subTitle,
            productDetailObj.image,
            productDetailObj.priceValue,
            productDetailObj.discount,
            productDetailObj.shippingCost,
            productDetailObj.available,
            productDetailObj.stock,
            productDetailObj.status,
            productDetailObj.trendingOrBasic,
            productDetailObj.createdOn,
            productDetailObj.updatedOn
        ];

        return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
          .then((row) => {

            if (row.insertId) {
               return row;
            } else {
              return 0;
            }

          })
          .catch(err => {
            console.log("error, while making query for qr_getWhome query function!!!", err);
          });

    }

    let qr_insertProductAttribute = ({productAttributeObj}) => {

        let sqlQuery = `INSERT INTO product_attribute 
        (brand_fk, phone_fk, price_fk, category_fk, product_fk, status, created_on, updated_on) 
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?)`;
        let paramr = [
            productAttributeObj.brandId,
            productAttributeObj.phoneId,
            productAttributeObj.priceId,
            productAttributeObj.categoryId,
            productAttributeObj.productId,
            productAttributeObj.status,
            productAttributeObj.createOn,
            productAttributeObj.updatedOn
        ];

        return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
            .then((row) => {
                if (row.insertId) {
                    return row;
                } else {
                    return 0;
                }
            })
            .catch(err => {
                console.log("error, while making query for qr_getWhome query function!!!", err);
            });
    }
    let qr_editProductData = ({productId, productAttributeId}) => {

        let sqlQuery = `SELECT * FROM product p INNER JOIN product_attribute pa ON p.pr_id = pa.product_fk WHERE p.pr_id=? AND pa.product_fk = ?  LIMIT 0, 1`;
        let paramr = [productId, productAttributeId];

        return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
            .then((row) => {
                if (row.insertId) {
                    return row;
                } else {
                    return 0;
                }
            })
            .catch(err => {
                console.log("error, while making query for qr_getWhome query function!!!", err);
            });
    }

module.exports = {
  qr_getFacebookUser: qr_getFacebookUser,
  qr_getFacebookUserCount: qr_getFacebookUserCount,
  qr_getProduct : qr_getProduct,
  qr_getProductCount : qr_getProductCount,
  qr_getProductAttribute : qr_getProductAttribute,
  qr_getProductAttributeCount : qr_getProductAttributeCount,
  qr_getBrand : qr_getBrand,
  qr_getPhone : qr_getPhone,
  qr_getPrice : qr_getPrice,
  qr_getCategory : qr_getCategory,
  qr_insertProduct :  qr_insertProduct,
  qr_insertProductAttribute : qr_insertProductAttribute,
  qr_editProductData :qr_editProductData
};