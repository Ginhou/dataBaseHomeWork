const moment = require('moment');

const product = require('../../../models/doc/clinet/product');

exports.getAllProduct = (req, res, next) => {
    product.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('doc/client/product', {
                 data: rows,username:req.cookies.username , isLogin : req.cookies.isLogin 
            });
        })
        .catch(err => console.log(err));
};

exports.searchProductBySeries =  (req, res, next) => {
    product.fetchBySeries(req.query.s)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows));
            res.render('doc/client/product', {
                 data: rows,username:req.cookies.username , isLogin : req.cookies.isLogin 
            });
        })
        .catch(err => console.log(err));
};

exports.getProductByNo =  (req, res, next) => {
    product.fetchByPNo(req.query.pno)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows));
            res.render('doc/client/product-detail', {
                 data: rows,username:req.cookies.username , isLogin : req.cookies.isLogin 
            });
        })
        .catch(err => console.log(err));
};