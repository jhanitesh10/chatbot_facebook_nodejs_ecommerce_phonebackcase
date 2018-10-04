const configuration = require('../configuration'),
      getConnection = configuration.getConnection,
      getQuery = configuration.getQuery;


let qr_getFacebookUser = ({offset, limit }) => {

    let sqlQuery = `SELECT id, name, firstname, lastname, gender, locale, timezone, profile_picture, picture, updated_on, created_on FROM facebook_user ORDER BY id LIMIT ?, ?`;
    let paramr = [offset, limit];

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



let qr_getFacebookUserCount = ({}) => {

    let sqlQuery = `SELECT id FROM facebook_user ORDER BY id`;
    let paramr = [];

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

let qr_getProduct = ({offset, limit }) => {

    let sqlQuery = `SELECT id, product_type, title, subtitle, image, price, discount, shipping_cost, available, product_count, active_status, trending_status, created_on, updated_on FROM product ORDER BY id LIMIT ?, ?`;
    let paramr = [offset, limit];
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


let qr_getProductCount = ({}) => {

    let sqlQuery = `SELECT id FROM product ORDER BY id`;
    let paramr = [];

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

let qr_getProductAttribute = ({ offset, limit, brandId, phoneId, priceId, categoryId}) => {
    let sqlQuery = `SELECT pa.id as productAttributeId,
        p.id as productId,
        br.id, br.title as brandTitle, pn.id, pn.title as phoneTitle, pr.id, pr.title as priceTitle, ct.id, ct.title as categoryTitle, p.id as priceId,p.id as productId, p.product_type, p.title, p.subtitle, p.image, p.price, p.discount, p.shipping_cost, p.available,  p.product_count, p.active_status, p.trending_status, p.created_on, p.updated_on 
        FROM product_attribute pa 
        INNER JOIN 
        brand br 
        ON 
        pa.brand_id = br.id
        INNER JOIN 
        phone pn
        ON
        pa.phone_id = pn.id
        INNER JOIN
        price pr
        ON
        pa.price_id = pr.id
        INNER JOIN
        category ct
        ON
        pa.category_id = ct.id
        INNER JOIN
        product p
        ON
        pa.product_id = p.id WHERE br.id = ? AND pn.id = ? AND pr.id = ? AND ct.id= ? AND p.active_status = 1 AND pa.active_status = 1 ORDER BY pa.id LIMIT ?, ?`;
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
        let sqlQuery = `SELECT pa.id
        FROM product_attribute pa 
        INNER JOIN 
        brand br 
        ON 
        pa.brand_id = br.id
        INNER JOIN 
        phone pn
        ON
        pa.phone_id = pn.id
        INNER JOIN
        price pr
        ON
        pa.price_id = pr.id
        INNER JOIN
        category ct
        ON
        pa.category_id = ct.id
        INNER JOIN
        product p
        ON
        pa.product_id = p.id WHERE br.id = ? AND pn.id = ? AND pr.id = ? AND ct.id= ? AND p.active_status = 1 AND pa.active_status = 1 ORDER BY pa.id`;
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
        let sqlQuery = `SELECT id, title FROM brand ORDER BY id`;
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
        let sqlQuery = `SELECT id, title FROM phone WHERE brand_id = ? ORDER BY brand_id`;
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
        let sqlQuery = `SELECT id, title FROM price ORDER BY id`;
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
        let sqlQuery = `SELECT id, title FROM category ORDER BY id`;
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
        (product_type, title, subtitle, image, price, discount, shipping_cost, available, product_count, active_status, trending_status, created_on, updated_on) 
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
        (brand_id, phone_id, price_id, category_id, product_id, active_status, created_on, updated_on) 
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

    let qr_editProductSave = ({productDetailObj}) => {

        let sqlQuery = `UPDATE  product SET
        product_type =? , 
        title = ?, 
        subtitle = ?, 
        image = ?, 
        price = ?, 
        discount = ?, 
        shipping_cost = ?, 
        available = ?, 
        product_count = ?, 
        active_status = ?, 
        trending_status = ?, 
        updated_on  = ?
        WHERE id = ?`;
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
            productDetailObj.updatedOn,
            productDetailObj.productId
        ];

        return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
            .then((row) => {
                if (row.affectedRows) {
                    return row;
                } else {
                    return 0;
                }
            })
            .catch(err => {
                console.log("error, while making query for qr_getWhome query function!!!", err);
            });
    }




    let qr_editProductData = ({ productAttributeId }) => {

        let sqlQuery = `SELECT * FROM product p INNER JOIN product_attribute pa ON p.id = pa.product_id WHERE pa.id = ? LIMIT 0, 1`;
        let paramr = [productAttributeId];

        return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
            .then((row) => {
                if (row.length) {
                    return row;
                } else {
                    return 0;
                }
            })
            .catch(err => {
                console.log("error, while making query for qr_getWhome query function!!!", err);
            });
    }   
    
    
    let qr_editProductAttributeSave = ({productAttributeObj}) => {

        let sqlQuery = `UPDATE product_attribute SET
        brand_id = ?, phone_id = ?, price_id = ?, category_id = ?, active_status = ?, updated_on = ? 
        WHERE
        id = ?`;
        let paramr = [
            productAttributeObj.brandId,
            productAttributeObj.phoneId,
            productAttributeObj.priceId,
            productAttributeObj.categoryId,
            productAttributeObj.status,
            productAttributeObj.updatedOn,
            productAttributeObj.id
        ];

        return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
            .then((row) => {
                if (row.affectedRows) {
                    return row;
                } else {
                    return 0;
                }
            })
            .catch(err => {
                console.log("error, while making query for qr_getWhome query function!!!", err);
            });
    }

    
let qr_getCompletePayment = ({offset, limit }) => {

    let sqlQuery = `SELECT uo.product_id, cp.payment_id, cp.status, cp.shorturl, cp.longurl, cp.purpose, cp.amount, cp.fees, cp.currency, cp.buyer, cp.buyer_name, cp.buyer_phone, cp.payment_request_id, cp.createdat, cp.updatedat FROM complete_payment cp INNER JOIN user_order uo ON cp.payment_request_id = uo.payment_request_id LIMIT ?, ?`;
    let paramr = [offset, limit];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
        .then((row) => {
            if (row.length) {
                return row;
            } else {
                return 0;
            }
        })
        .catch(err => {
            console.log("error, while making query for qr_getWhome query function!!!", err);
        });
}  

let qr_getCompletePaymentCount = ({  }) => {

    let sqlQuery = `SELECT uo.product_id, cp.payment_id FROM complete_payment cp INNER JOIN user_order uo ON cp.payment_request_id = uo.payment_request_id`;
    let paramr = [];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
        .then((row) => {
            if (row.length) {
                return row;
            } else {
                return 0;
            }
        })
        .catch(err => {
            console.log("error, while making query for qr_getWhome query function!!!", err);
        });
}  


let qr_getOrder = ({ offset, limit, paymentStatus, deliveryStatus, processStatus, orderStatus}) => {
    
    let sqlQuery = `SELECT * FROM user_order WHERE order_type = ? AND payment_status = ? AND delivery_status = ? AND process_status = ? LIMIT ?, ?`;
    let paramr = [orderStatus, paymentStatus, deliveryStatus, processStatus, offset, limit];
    return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
        .then((row) => {
            if (row.length) {
                return row;
            } else {
                return [];
            }
        })
        .catch(err => {
            console.log("error, while making query for qr_getWhome query function!!!", err);
        });
}  
let qr_getOrderCount = ({ paymentStatus,deliveryStatus,processStatus,orderStatus}) => {

    let sqlQuery = `SELECT * FROM user_order WHERE order_type =? AND payment_status = ? AND delivery_status = ? AND process_status = ?`;
    let paramr = [orderStatus, paymentStatus, deliveryStatus, processStatus];
    return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
        .then((row) => {
            if (row.length) {
                return row;
            } else {
                return [];
            }
        })
        .catch(err => {
            console.log("error, while making query for qr_getWhome query function!!!", err);
        });
}  

let qr_deleteProductAttribute = ({productAttributeId, activeStatus}) => {
    let sqlQuery = `UPDATE product_attribute SET
        active_status = ? 
        WHERE
        id = ?`;
    let paramr = [
        activeStatus,
        productAttributeId
    ];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
        .then((row) => {
            if (row.affectedRows) {
                return row;
            } else {
                return 0;
            }
        })
        .catch(err => {
            console.log("error, while making query for qr_getWhome query function!!!", err);
        });
}

let qr_handleProductAvailibility = ({ productId, available}) => {
    let sqlQuery = `UPDATE product SET
        available = ? 
        WHERE
        id = ?`;
    let paramr = [
        available,
        productId
    ];
    
    return getQuery({ sqlQuery: sqlQuery, paramr: paramr })
        .then((row) => {
            if (row.affectedRows) {
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
  qr_editProductData :qr_editProductData,
  qr_editProductSave : qr_editProductSave,
  qr_editProductAttributeSave : qr_editProductAttributeSave,
  qr_getCompletePayment: qr_getCompletePayment,
  qr_getCompletePaymentCount: qr_getCompletePaymentCount,
  qr_getOrder : qr_getOrder,
  qr_getOrderCount : qr_getOrderCount,
  qr_deleteProductAttribute: qr_deleteProductAttribute,
  qr_handleProductAvailibility : qr_handleProductAvailibility
};