let Promise = require('bluebird'),
    request = Promise.promisify(require('request')),
    rq = Promise.promisifyAll(request);

let confidential = require('../confidential/data.js'),
    X_API_KEY_INSTAMOJO = confidential.X_API_KEY_INSTAMOJO,
    X_AUTH_TOKEN_INSTAMOJO = confidential.X_AUTH_TOKEN_INSTAMOJO;

let arq_paymentRequest = ({orderDetail}) => {
    const url = `https://test.instamojo.com/api/1.1/payment-requests/`;
    const header = {
        'X-Api-Key': `${X_API_KEY_INSTAMOJO}`,
        'X-Auth-Token': `${X_AUTH_TOKEN_INSTAMOJO}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    let payload = {
        purpose: `${orderDetail.purpose}`,
        amount: `${orderDetail.amount}`,
        phone: `${orderDetail.phone}`,
        buyer_name: `${orderDetail.name}`,
        redirect_url: 'https://c4ed6e0b.ngrok.io/redirect',
        send_email: true,
        webhook: 'https://c4ed6e0b.ngrok.io/paymentSuccess',
        send_sms: true,
        email: `${orderDetail.email}`,
        allow_repeated_payments: false
    };
    return rq({
            "uri": `${url}`,
            "method": "POST",
            "headers": header,
            "body": JSON.stringify(payload)
        })
        .then((response) => {

            let values = JSON.parse(JSON.stringify(response));
            // console.log(values);
            // console.log({status : 1, body: values.body, headers: values.headers, statusCode: values.statusCode, callCountLimi : values.headers.http_x_shopify_shop_api_call_limit});
            return {
                statusCode: values.statusCode,
                callCountLimit: values.headers,
                body: values.body,
                headers: values.headers
            };
        })
        .catch((error) => {
            return {
                statusCode: error.statusCode,
                body: error.body,
                headers: error.headers
            };
        });

}

module.exports = {
    arq_paymentRequest: arq_paymentRequest
}


