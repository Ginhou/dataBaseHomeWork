const moment = require('moment');

const post = require('../../../models//doc/admin/checkout');

exports.gotoSignUp = (req, res, next) => {
    res.render('doc/admin/checkout');
};



exports.postCheckout = (req, res, next) => {
    post.checkout(req).then(([rows]) => {
            //console.log('postCheckout complete');
            //console.log(rows);
            //console.log(JSON.stringify(rows));
            res.redirect('/');
    })
    .catch(err => console.log(err));
};
