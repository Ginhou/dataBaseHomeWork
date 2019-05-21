const moment = require('moment');

const cart = require('../../../models/doc/clinet/cart.js');

exports.gotoCart = (req, res, next) => {
    res.render('doc/clinet/cart');
};

exports.getAddcartBy = (req, res, next) => {
    let pNo = req.query.pNo;
    let mId = req.cookies.mId;
    let quantity = req.query.quantity;
    let pUnitprice= req.query.unitprice;
    let total = quantity * pUnitprice;

     cart.postAddcart(pNo, quantity, mId,total).then(([rows]) => {
        console.log("postAddcart sucess");
        

        res.redirect("product-Detail?pno="+pNo)
       // res.render('doc/client/product-detail',{data:data});
    })
        .catch(err => console.log(err));

};


exports.getCartProduct = (req, res, next) => {
    
    

        cart.fetchCartProductByMid(req.cookies.mId).then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            if(rows==""){
                res.render("doc/client/cart", { data: "", mId: req.cookies.mId, username: req.cookies.username, isLogin: req.cookies.isLogin });
            }
            else{
            let dataCart = [];
            var dataProduct = [];
            dataCart = rows;
            //console.log(dataCart[0].pNo);


            //fetchProductByPNo
            for (var i = 0; i < dataCart.length; i++) {

                cart.fetchByPNo(dataCart[i].pNo).then(([rows]) => {
                    for (let p of rows) {

                        p.date = moment(p.date).format('MMM D, YYYY');
                    }

                    dataProduct.push(rows[0]);
                    if (dataProduct.length == dataCart.length) {
                        console.log(JSON.stringify(dataCart));
                        res.render("doc/client/cart", { data: dataProduct, mId: req.cookies.mId, username: req.cookies.username, isLogin: req.cookies.isLogin ,dataCart:dataCart });
                        //res.redirect("/cart");
                    }

                })
                    .catch(err => console.log(err));


            }
        }

        })
            .catch(err => console.log(err));
    

};

exports.deleteCartProductById = (req, res, next) => {
    

     cart.deleteCartProduct(req.query.pId).then(([rows]) => {
        console.log("postAddcart sucess");
        

        res.redirect("/cart")
    })
        .catch(err => console.log(err));

};
