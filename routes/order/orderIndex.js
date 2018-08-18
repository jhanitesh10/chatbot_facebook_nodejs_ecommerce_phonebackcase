const Promise = require('bluebird');

let api = require('../../api/facebookRequest.js'),
    arq_getUserDetail = api.arq_getUserDetail;

let paymentApi = require('../../api/paymentRequest.js'),
    arq_paymentRequest = paymentApi.arq_paymentRequest;

let query = require('../../database/facebook/productQuery.js'),
    qr_getProductDetailOnForm = query.qr_getProductDetailOnForm,
    qr_insertUserAddress = query.qr_insertUserAddress,
    qr_insertOrderDetail = query.qr_insertOrderDetail,
    qr_completePaymentDetail = query.qr_completePaymentDetail,
    qr_updatePaymentStatus = query.qr_updatePaymentStatus,
    qr_orderReceipt = query.qr_orderReceipt,
    qr_productPriceDiscount = query.qr_productPriceDiscount,
    qr_selectAttacheProductDetailForm = query.qr_selectAttacheProductDetailForm,
    qr_productPriceDiscountAttach = query.qr_productPriceDiscountAttach;

let productResponse = require('../facebook/handleProduct/productResponse.js'),
    orderReceipt = productResponse.orderReceipt;

let shortFunction = require('../shortFunction/function.js'),
    currentDateTimeUnix = shortFunction.currentDateTimeUnix,
    discount = shortFunction.discount,
    calculateDiscount = shortFunction.calculateDiscount;

let buyProduct = (req, res) => {

    let productId = req.query.productId,
        userId = req.query.userId,
        productArray = [];

        productArray[0] = req.query.d1;
        productArray[1] = req.query.d2;
        productArray[2] = req.query.d3;
        productArray[3] = req.query.d4;

        let name, profilePictureUrl, total;

        return qr_getProductDetailOnForm({
            productArray: productArray,
            productId : productId
        }).then((productDataRow) => {


            discount({ price: productDataRow[0].price, discount: productDataRow[0].discount, shippingCost: productDataRow[0].shipping_cost }).then((totalAmount) => {
                total = totalAmount;
            });
            return arq_getUserDetail({senderId : userId}).then((userData) => {
                name = userData.name;
                profilePictureUrl = decodeURI(userData.profile_pic);
                console.log(total, "**********8", name, profilePictureUrl);

                res.render('facebook/orderForm', {
                    userId : userId,
                    status : 0,
                    profilePictureUrl: profilePictureUrl,
                    name : name,
                    prId : productDataRow[0].pr_id,
                    title : productDataRow[0].title,
                    subtitle: productDataRow[0].subtitle,
                    image: productDataRow[0].image,
                    price: productDataRow[0].price,
                    discount: productDataRow[0].discount,
                    total : total,
                    shippingCost: productDataRow[0].shipping_cost,
                    isAvailable: productDataRow[0].isAvailable,
                    brandTitle: productDataRow[0].brandTitle,
                    phoneTitle: productDataRow[0].phoneTitle,
                    priceTitle: productDataRow[0].priceTitle,
                    categoryTitle:productDataRow[0].categoryTitle
                });


            });




        });
}

let orderPayment = (req, res) => {
    
    let orderDetailObj = {

               userId : req.body.userId,
               status : req.body.status,
               name : req.body.name,
               profilePictureUrl : req.body.profilePictureUrl,
               productId : req.body.productId,
               price : req.body.price,
               discount : req.body.discount,
               total : req.body.total,
               shippingCost: req.body.shippingCost,
               image : req.body.image,
               brandTitle : req.body.brandTitle,
               phoneTitle : req.body.phoneTitle,
               priceTitle : req.body.priceTitle,
               categoryTitle : req.body.categoryTitle,
               email : req.body.email,
               contact : req.body.tel,
               description : req.body.description,
               createdAt : currentDateTimeUnix(),
               updatedAt : currentDateTimeUnix()
    }

    let address = req.body.address,
        state = req.body.state,
        city = req.body.city,
        zip = req.body.zip;

    let orderDetail = {
        purpose : "Freak Phone case payment",
        amount : orderDetailObj.total,
        phone : orderDetailObj.contact,
        name : orderDetailObj.name,
        email : orderDetailObj.email
    }


    if (orderDetailObj.status === 0) {
        console.log("*************0");
        qr_productPriceDiscount({productId : orderDetailObj.productId}).then( (productDetail) => {
            // console.log(productDetail);
            discount({
                price: productDetail[0].price,
                discount: productDetail[0].discount,
                shippingCost : productDetail.shipping_cost
            }).then((totalAmount) => {
                orderDetail.amount = totalAmount;
            });
    
        });

    } else if (orderDetailObj.status === 1) {
        console.log("*************1");

        qr_productPriceDiscountAttach({productId : orderDetailObj.productId, facebookId : orderDetailObj.userId}).then( (productDetail) => {

          discount({
              price: productDetail[0].price,
              discount: productDetail[0].discount,
              shippingCost: productDetail.shipping_cost
          }).then((totalAmount) => {
              orderDetail.amount = totalAmount;
          });

        });
        
    }else{

          discount({
                price: 100,
                discount: 20,
                shippingCost: 100
          }).then((totalAmount) => {
                orderDetail.amount = totalAmount;
          });

    }
    
    
     return arq_paymentRequest({ orderDetail: orderDetail }).then((paymentResponse) => {
        let paymentBody = JSON.parse(paymentResponse.body);
            statusCode = paymentResponse.statusCode;
              
           let longurl, paymentRequest, createdAt, modifiedAt;

           if (statusCode === 201) {
                   longUrl = paymentBody.payment_request.longurl,
                   paymentRequestId = paymentBody.payment_request.id,
                   createdAt = currentDateTimeUnix(paymentBody.payment_request.created_at),
                   modifiedAt = currentDateTimeUnix(paymentBody.payment_request.modified_at);
           } else {
                   longUrl = 0,
                   paymentRequestId = 0,
                   createdAt = 0,
                   modifiedAt = 0;
           }
           
            return qr_insertUserAddress({ address: address, state: state, city: city, zip: zip }).then((addressForeignKey) => {

                return qr_insertOrderDetail({ orderDetailObj: orderDetailObj, addressId: addressForeignKey, paymentRequestId : paymentRequestId, paymentCreatedAt : createdAt, paymentModifiedAt :  modifiedAt}).then( () => {
                   console.log("order  detail complete!!!"); 
                   res.redirect(`${longUrl}`);
                });

            });
            
    });



}

let paymentSuccess = (req, res) => {
    console.log(req.body, "**************************");
    let paymentDetailObj = {
                            paymentId : req.body.payment_id,
                            status : req.body.status,
                            shorturl : req.body.shorturl,
                            longurl : req.body.longurl,
                            purpose : req.body.purpose,
                            amount : req.body.amount,
                            fees : req.body.fees,
                            currency : req.body.currency,
                            buyer : req.body.buyer,
                            buyerName : req.body.buyer_name,
                            buyerPhone : req.body.buyer_phone,
                            paymentRequestId : req.body.payment_request_id,
                            mac : req.body.mac,
                            createdAt : currentDateTimeUnix(),
                            updatedAt : currentDateTimeUnix()
                        };

    if (paymentDetailObj.status === "Credit") {

        return qr_completePaymentDetail({
                paymentDetailObj: paymentDetailObj
            }).then((paymentComplete) => {
                return qr_updatePaymentStatus({ paymentRequestId: paymentDetailObj.paymentRequestId, status: 1 }).then(() => {
                    return qr_orderReceipt({paymentRequestId : paymentDetailObj.paymentRequestId}).then((orderDetail) => {
                        return calculateDiscount({price : orderDetail[0].price, discount : orderDetail[0].discount}).then( (discountData) => {
                            return orderReceipt({  orderDetailObj : orderDetail[0], paymentDetailObj : paymentDetailObj, discount: discountData});
                        });
                    });
                });
        });

    }else{

        console.log("payment failed!!");
    }

}


let paymentSuccessRedirect = (req, res) => {
    res.render('facebook/successPayment');
}



let buyProductAttache = (req, res) => {

    let productId = req.query.productId,
        userId = req.query.userId,
        productArray = [];

    productArray[0] = req.query.d1;
    productArray[1] = req.query.d2;
    productArray[2] = req.query.d3;

    let name, profilePictureUrl, total;

    return qr_selectAttacheProductDetailForm({
        productArray: productArray,
        productId: productId,
        userId : userId
    }).then((productDataRow) => {

            console.log(productDataRow, "*************************");

        discount({
            price: productDataRow[0].price,
            discount: productDataRow[0].discount,
            shippingCost: productDataRow[0].shipping_cost
        }).then((totalAmount) => {
            total = totalAmount;
        });

        return arq_getUserDetail({
            senderId: userId
        }).then((userData) => {
            name = userData.name;
            profilePictureUrl = decodeURI(userData.profile_pic);
            console.log(total, "**********8", name, profilePictureUrl);

            res.render('facebook/orderForm', {
                userId: userId,
                status: 1,
                profilePictureUrl: profilePictureUrl,
                name: name,
                prId: productDataRow[0].product_id,
                title: "title",
                subtitle: "subtitle",
                image: productDataRow[0].image,
                price: productDataRow[0].price,
                discount: productDataRow[0].discount,
                total: total,
                shippingCost: productDataRow[0].shipping_cost,
                isAvailable: "0",
                brandTitle: productDataRow[0].brandTitle,
                phoneTitle: productDataRow[0].phoneTitle,
                priceTitle: productDataRow[0].priceTitle,
                categoryTitle: "category"
            });


        });




    });
}
module.exports = {
    buyProduct: buyProduct,
    orderPayment : orderPayment,
    paymentSuccess : paymentSuccess,
    paymentSuccessRedirect : paymentSuccessRedirect,
    buyProductAttache: buyProductAttache
}