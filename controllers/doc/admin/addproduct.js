const moment = require('moment');

const addproductcontroller = require('../../../models/doc/admin/addproduct');

exports.gotoAddProdouct = (req, res, next) => {
    res.render('doc/admin/addproduct');
};



exports.postAddProduct = (req, res, next) => {
    
    addproductcontroller.addproduct(req).then(([rows]) => {
        console.log("postAddProductpostAddProductpostAddProduct");
       res.redirect('/');
    })
     .catch(err => console.log(err));
    
};
