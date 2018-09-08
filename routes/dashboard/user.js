let dashboardQuery = require('../../database/dashboard/dashboardQuery.js'),
    qr_getFacebookUser = dashboardQuery.qr_getFacebookUser,
    qr_getFacebookUserCount = dashboardQuery.qr_getFacebookUserCount;

let facebookUser = (req, res) => {

    let offset = +(req.query.offset),
        limit = +(req.query.limit);


    return qr_getFacebookUser({ offset: offset, limit: limit }).then((facebookUser) => {

        res.json(facebookUser);
    });

}

let getFacebookUserCount = (req, res) => {

    return qr_getFacebookUserCount({}).then((facebookUserCount) => {
        res.json(facebookUserCount);
    });

}
module.exports = {
    facebookUser: facebookUser,
    getFacebookUserCount: getFacebookUserCount
}