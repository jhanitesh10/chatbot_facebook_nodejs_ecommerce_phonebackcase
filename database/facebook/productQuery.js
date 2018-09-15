const configuration = require('../../database/configuration'),
      getConnection = configuration.getConnection,
      getQuery = configuration.getQuery;



let qr_getProduct = ({productArray, trendingStatus}) => {
  let [brandId, phoneId, priceId, categoryId] = productArray;

  let sqlQuery = `SELECT 
p.id, p.product_type, p.title, p.subtitle, p.image, p.price, p.discount, p.available, p.product_count, p.basic_status, p.trending_status,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload,
pr.title as priceTitle, pr.payload as pricePayload
FROM
product p 
INNER JOIN
product_attribute  pa on p.id = pa.product_id 
INNER JOIN 
brand br on br.id = pa.brand_id 
INNER JOIN 
phone pn ON pn.id = pa.phone_id 
INNER JOIN 
price pr ON pr.id = pa.price_id
WHERE
pa.brand_id = ? AND pa.phone_id = ? AND pa.price_id = ? AND pa.category_id = ?  AND p.available = 1 AND p.active_status = 1  AND p.trending_status =? ORDER BY RAND() LIMIT 2`;

  let paramr = [brandId, phoneId, priceId, categoryId, trendingStatus];

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
p.id, p.product_type, p.title, p.subtitle, p.image, p.price, p.discount, p.shipping_cost, p.available, p.product_count, p.active_status, p.trending_status,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload,
pr.title as priceTitle, pr.payload as pricePayload,
ct.title as categoryTitle, ct.payload as categoryPayload
FROM
product p 
INNER JOIN
product_attribute  pa on p.id = pa.product_id 
INNER JOIN 
brand br on br.id = pa.brand_id 
INNER JOIN 
phone pn ON pn.id = pa.phone_id 
INNER JOIN 
price pr ON pr.id = pa.price_id
INNER JOIN 
category ct ON ct.id = pa.category_id
WHERE
pa.brand_id = ? AND pa.phone_id = ? AND pa.price_id = ? AND pa.category_id = ? AND p.id = ? AND p.available = 1 AND p.active_status=1 LIMIT 1`;
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
  
  let sqlQuery = `INSERT INTO address (address, state, city, zip) VALUES (?, ?, ?, ?)`;
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
        facebook_user_id,
        product_id,
        address_id,
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
        created_on,
        updated_on
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
  let sqlQuery = `SELECT * FROM user_order uo INNER JOIN address ua ON uo.address_id = ua.id  WHERE uo.payment_request_id = ?`;
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
  let sqlQuery = `SELECT price, discount, shipping_cost FROM product WHERE id = ?`;
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
  
  let sqlQuery = `INSERT INTO attached_product_detail(facebookid, product_id, brand_id, phone_id, attached_product_pirce_id, image, active_status, created_on, updated_on)
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
  brandId, phoneId, priceId, attachedProductId
}) => {
  let sqlQuery = `SELECT 
apa.id, apa.brand_id, apa.phone_id, apa.price_id, apa.price, apa.shipping_cost, apa.discount, apa.active_status,
apd.facebookid, apd.product_id, apd.image,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload
FROM
attach_product_attribute apa 
INNER JOIN
brand br on br.id = apa.brand_id 
INNER JOIN 
phone pn ON pn.id = apa.phone_id 
INNER JOIN 
attached_product_detail apd ON apd.attached_product_pirce_id = apa.price_id
WHERE
apa.active_status=1 AND apa.brand_id = ? AND apa.phone_id = ? AND apa.price_id = ? AND apd.id = ?`;

  let paramr = [brandId, phoneId, priceId, attachedProductId];

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
apa.id, apa.brand_id, apa.phone_id, apa.price_id, apa.price, apa.shipping_cost, apa.discount, apa.active_status,
apd.facebookid, apd.product_id, apd.image,
br.title as brandTitle, br.payload as brandPayload, 
pn.title as phoneTitle, pn.payload as phonePayload,
app.title as priceTitle, app.payload as pricePayload
FROM
attach_product_attribute apa 
INNER JOIN
brand br on br.id = apa.brand_id 
INNER JOIN 
phone pn ON pn.id = apa.phone_id 
INNER JOIN 
attached_product_price app  ON app.id = apa.price_id
INNER JOIN 
attached_product_detail apd ON apd.attached_product_pirce_id = apa.price_id
WHERE
apa.brand_id = ? AND apa.phone_id = ? AND apa.price_id = ? AND apd.product_id = ? AND apd.facebookid = ?`;
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
apa.id,apa.price, apa.shipping_cost, apa.discount,
apd.image
FROM
attach_product_attribute apa
INNER JOIN 
attached_product_detail apd ON apd.attached_product_pirce_id = apa.price_id
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