const moment = require('moment');

const getProductinfo = require('../../../models/doc/clinet/product');

exports.getAllProduct = (req, res, next) => {
    getProductinfo.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('doc/client/index', {
                 data: rows,username:req.cookies.username , isLogin : req.cookies.isLogin ,mId:req.cookies.mId
            });
        })
        .catch(err => console.log(err));
};