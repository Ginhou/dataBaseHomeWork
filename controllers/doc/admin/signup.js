const moment = require('moment');

const post = require('../../../models/doc/admin/signup');

exports.gotoSignUp = (req, res, next) => {
    res.render('doc/admin/signup');
};


exports.postSignUp = (req, res, next) => {
    post.signUp(req).then(([rows]) => {
            console.log(rows);

            res.cookie('username',req.body.username, { signed: false, maxAge:600*1000});
                
            res.cookie('isLogin', true , { signed: false, maxAge:600*1000});

            post.getMemberName(req.body.username).then(([rows]) => {

            res.cookie('mId', rows[0].mid , { signed: false, maxAge:600*1000});


             res.redirect('/');
            }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
