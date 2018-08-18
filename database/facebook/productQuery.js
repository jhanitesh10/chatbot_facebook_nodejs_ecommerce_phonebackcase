const configuration = require('../../database/configuration'),
      getConnection = configuration.getConnection,
      getQuery = configuration.getQuery;



let qr_getProduct = ({productArray, topStatus}) => {
  let [brandId, phoneId, priceId, categoryId] = productArray;

  let sqlQuery = `SELECT 
p.pr_id, p.product_type, p.title, p.subtitle, p.image, p.price, p.discount, p.isAvailable, p.product_count, p.status, p.top_status,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload,
pr.title as priceTitle, pr.payload as pricePayload
FROM
product p 
INNER JOIN
product_attribute  pa on p.pr_id = pa.product_fk 
INNER JOIN 
brand br on br.br_id = pa.brand_fk 
INNER JOIN 
phone pn ON pn.pn_id = pa.phone_fk 
INNER JOIN 
price pr ON pr.pr_id = pa.price_fk
WHERE
pa.brand_fk = ? AND pa.phone_fk = ? AND pa.price_fk = ? AND pa.category_fk = ? AND p.top_status = ? AND p.isAvailable = 1 ORDER BY RAND() LIMIT 2 `;
  let paramr = [brandId, phoneId, priceId, categoryId, topStatus];
  // console.log(sqlQuery, paramr);
  return getQuery({sqlQuery : sqlQuery, paramr : paramr}).then( (row) => {

    if(row.length){
      return row;
    }else{
      return 0;
    }

  }).catch( (err) => {
    console.log("error, while making query for qr_getProduct query function!!!", err);
  });
}

let qr_getProductDetailOnForm = ({
  productArray,
  productId
}) => {
  let [brandId, phoneId, priceId, categoryId] = productArray;

  let sqlQuery = `SELECT 
p.pr_id, p.product_type, p.title, p.subtitle, p.image, p.price, p.discount, p.shipping_cost, p.isAvailable, p.product_count, p.status, p.top_status,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload,
pr.title as priceTitle, pr.payload as pricePayload,
ct.title as categoryTitle, ct.payload as categoryPayload
FROM
product p 
INNER JOIN
product_attribute  pa on p.pr_id = pa.product_fk 
INNER JOIN 
brand br on br.br_id = pa.brand_fk 
INNER JOIN 
phone pn ON pn.pn_id = pa.phone_fk 
INNER JOIN 
price pr ON pr.pr_id = pa.price_fk
INNER JOIN 
category ct ON ct.ct_id = pa.category_fk
WHERE
pa.brand_fk = ? AND pa.phone_fk = ? AND pa.price_fk = ? AND pa.category_fk = ? AND p.pr_id = ? AND p.isAvailable = 1`;
  let paramr = [brandId, phoneId, priceId, categoryId, productId];
  console.log(sqlQuery, paramr);
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
    console.log("error, while making query for qr_getProduct query function!!!", err);
  });
}

let qr_insertUserAddress = ({address, state, city, zip}) => {
  
  let sqlQuery = `INSERT INTO user_address (address, state, city, zip) VALUES (?, ?, ?, ?)`;
  let paramr = [address, state, city, zip];

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

let qr_insertOrderDetail = ({ orderDetailObj, addressId, paymentRequestId, paymentCreatedAt, paymentModifiedAt }) => {
  
  let sqlQuery = `INSERT INTO user_order (
        fk_user_id,
        fk_product_id,
        fk_add_id,
        payment_request_id,
        payment_created_at,
        payment_modified_at,
        name,
        email,
        contact,
        brand,
        phone,
        category,
        price,
        discount,
        shipping_cost,
        total,
        image,
        description,
        payment_status,
        delivery_status,
        createdat,
        updatedat
      )
       VALUES 
      ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  let paramr = [
    orderDetailObj.userId,
    orderDetailObj.productId,
    addressId,
    paymentRequestId,
    paymentCreatedAt,
    paymentModifiedAt,
    orderDetailObj.name,
    orderDetailObj.email,
    orderDetailObj.contact,
    orderDetailObj.brandTitle,
    orderDetailObj.phoneTitle,
    orderDetailObj.categoryTitle,
    orderDetailObj.price,
    orderDetailObj.discount,
    orderDetailObj.shippingCost,
    orderDetailObj.total,
    orderDetailObj.image,
    orderDetailObj.description,
    0,
    0,
    orderDetailObj.createdAt,
    orderDetailObj.updatedAt
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


let qr_completePaymentDetail = ({ paymentDetailObj }) => {
  
  let sqlQuery = `INSERT INTO complete_payment(
        payment_id,
        status,
        shorturl,
        longurl,
        purpose,
        amount,
        fees,
        currency,
        buyer,
        buyer_name,
        buyer_phone,
        payment_request_id,
        mac,
        createdat,
        updatedat
  ) 
  VALUES 
  ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?, ?, ?, ?)`;

  let paramr = [
      paymentDetailObj.paymentId,
      paymentDetailObj.status,
      paymentDetailObj.shorturl,
      paymentDetailObj.longurl,
      paymentDetailObj.purpose,
      paymentDetailObj.amount,
      paymentDetailObj.fees,
      paymentDetailObj.currency,
      paymentDetailObj.buyer,
      paymentDetailObj.buyerName,
      paymentDetailObj.buyerPhone,
      paymentDetailObj.paymentRequestId,
      paymentDetailObj.mac,
      paymentDetailObj.createdAt,
      paymentDetailObj.updatedAt
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


let qr_updatePaymentStatus = ({ paymentRequestId, status }) => {

  let sqlQuery = 'UPDATE user_order SET payment_status = ? WHERE payment_request_id = ?';
  let paramr = [status, paymentRequestId];

    return getQuery({
      sqlQuery: sqlQuery,
      paramr: paramr
    }).then((row) => {

      if (row.length) {
        return row.affectedRows;
      } else {
        return 0;
      }

    });

}

let qr_orderReceipt = ({
  paymentRequestId
}) => {
  let sqlQuery = `SELECT * FROM user_order uo INNER JOIN user_address ua ON uo.fk_add_id = ua.ad_id  WHERE uo.payment_request_id = ?`;
  let paramr = [paymentRequestId];

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
    console.log("error, qr_orderReceipt call!!!", err);
  });
}


let qr_productPriceDiscount = ({
  productId
}) => {
  let sqlQuery = `SELECT price, discount, shipping_cost FROM product WHERE pr_id = ?`;
  let paramr = [productId];
  console.log(sqlQuery, paramr);
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
    console.log("error, qr_orderReceipt call!!!", err);
  });
}




let qr_attachProductDetail = ({ attachedProductDetail }) => {
  
  let sqlQuery = `INSERT INTO attached_product_detail(facebookid,product_id, brand, phone, price, image, status, created_on, updated_on)
                    VALUES
                  (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  let paramr = [
      attachedProductDetail.facebookId,
      attachedProductDetail.productId,
      attachedProductDetail.brand,
      attachedProductDetail.phone,
      attachedProductDetail.price,
      attachedProductDetail.image,
      attachedProductDetail.status,
      attachedProductDetail.createdAt,
      attachedProductDetail.updatedAt
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




let qr_selectAttacheProduct = ({
  brandId, phoneId, priceId, id
}) => {
  let sqlQuery = `SELECT 
ap.ap_id, ap.brand_fk, ap.phone_fk, ap.price_fk,ap.price, ap.shipping_cost, ap.discount, ap.status, ap.status,
apd.facebookid, apd.product_id, apd.image,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload,
pr.title as priceTitle, pr.payload as pricePayload
FROM
attach_product_price ap 
INNER JOIN
brand br on br.br_id = ap.brand_fk 
INNER JOIN 
phone pn ON pn.pn_id = ap.phone_fk 
INNER JOIN 
topproduct_price pr ON pr.tpr_id = ap.price_fk
INNER JOIN 
attached_product_detail apd ON apd.price = ap.price_fk
WHERE
ap.brand_fk = ? AND ap.phone_fk = ? AND ap.price_fk = ? AND apd.apd_id = ?`;
  let paramr = [brandId, phoneId, priceId, id];
  console.log(sqlQuery, paramr);
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
    console.log("error, qr_orderReceipt call!!!", err);
  });
}


let qr_selectAttacheProductDetailForm = ({
productId,
userId,
productArray
}) => {

  let [brandId, phoneId, priceId] = productArray;

  let sqlQuery = `SELECT 
ap.ap_id, ap.brand_fk, ap.phone_fk, ap.price_fk,ap.price, ap.shipping_cost, ap.discount, ap.status, ap.status,
apd.facebookid, apd.product_id, apd.image,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload,
pr.title as priceTitle, pr.payload as pricePayload
FROM
attach_product_price ap 
INNER JOIN
brand br on br.br_id = ap.brand_fk 
INNER JOIN 
phone pn ON pn.pn_id = ap.phone_fk 
INNER JOIN 
topproduct_price pr ON pr.tpr_id = ap.price_fk
INNER JOIN 
attached_product_detail apd ON apd.price = ap.price_fk
WHERE
ap.brand_fk = ? AND ap.phone_fk = ? AND ap.price_fk = ? AND apd.product_id = ? AND apd.facebookid = ?;`;
  let paramr = [brandId, phoneId, priceId, productId, userId];

  console.log(sqlQuery, paramr);
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
    console.log("error, qr_orderReceipt call!!!", err);
  });
}



let qr_productPriceDiscountAttach = ({
  productId, facebookId
}) => {
  let sqlQuery = `SELECT 
ap.ap_id,ap.price, ap.shipping_cost, ap.discount,
apd.image
FROM
attach_product_price ap 
INNER JOIN 
attached_product_detail apd ON apd.price = ap.price_fk
WHERE
apd.facebookid = ? AND apd.product_id = ?`;
  let paramr = [productId, facebookId];

  console.log(sqlQuery, paramr);
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
    console.log("error, qr_orderReceipt call!!!", err);
  });
}


module.exports = {
  qr_getProduct : qr_getProduct,
  qr_getProductDetailOnForm: qr_getProductDetailOnForm,
  qr_insertUserAddress : qr_insertUserAddress,
  qr_insertOrderDetail: qr_insertOrderDetail,
  qr_completePaymentDetail: qr_completePaymentDetail,
  qr_updatePaymentStatus: qr_updatePaymentStatus,
  qr_orderReceipt: qr_orderReceipt,
  qr_productPriceDiscount: qr_productPriceDiscount,
  qr_attachProductDetail: qr_attachProductDetail,
  qr_selectAttacheProduct : qr_selectAttacheProduct,
  qr_selectAttacheProductDetailForm: qr_selectAttacheProductDetailForm,
  qr_productPriceDiscountAttach: qr_productPriceDiscountAttach
}