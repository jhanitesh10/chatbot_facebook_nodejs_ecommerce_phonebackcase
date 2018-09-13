let Promise = require('bluebird'),
    request = Promise.promisify(require('request')),
    rq = Promise.promisifyAll(request);


let arq_paymentRequest = ({orderDetail}) => {
    const url = `https://test.instamojo.com/api/1.1/payment-requests/`;
    const header = {
        'X-Api-Key': 'test_6cea3217740b750f3caa259966f',
        'X-Auth-Token': 'test_d6cc511e2ba011aeb3abdbf6eac',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    let payload = {
        purpose: `${orderDetail.purpose}`,
        amount: `${orderDetail.amount}`,
        phone: `${orderDetail.phone}`,
        buyer_name: `${orderDetail.name}`,
        redirect_url: 'https://90957e92.ngrok.io/redirect',
        send_email: true,
        webhook: 'https://90957e92.ngrok.io/paymentSuccess',
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


