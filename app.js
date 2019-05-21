
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

// var dashboardRouter = require('./routes/doc/dashboard');
// var usersRouter = require('./routes/users');


var indexRouter = require('./routes/doc/clinet/index');
//shop router
var shopRouter = require('./routes/doc/clinet/shop/product');
var searchRouter = require('./routes/doc/clinet/shop/search');

//addproduct
var gotoAddproductRouter = require('./routes/doc/admin/addproduct/gotoaddproduct');
var addproductRouter = require('./routes/doc/admin/addproduct/addproduct');

//product router
var productRouter = require('./routes/doc/clinet/shop/product-Details');
//login router
var loginRouter = require('./routes/doc/admin/login/login');
var memberRouter = require('./routes/doc/admin/login/member');
var logoutRouter = require('./routes/doc/admin/login/logout');
//signup router
var signUpRouter = require('./routes/doc/admin/signup/signup');
var registerRouter = require('./routes/doc/admin/signup/register');

//cart
var addcartRouter = require('./routes/doc/clinet/cart/addcart');
var cartRouter = require('./routes/doc/clinet/cart/cart');
//deleteProduct
var deleteProductRouter = require('./routes/doc/clinet/cart/deleteproduct');

//checkout
checkoutRouter = require('./routes/doc/admin/checkout/checkout');
postcheckoutRouter = require('./routes/doc/admin/checkout/postcheckout')

const postRouter = require('./routes/doc/post');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser('testCookies'));

//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/public')));

// app.use('/dashboard', dashboardRouter);

//index
app.use('/', indexRouter);
//product
app.use('/product', shopRouter);
app.use('/search', searchRouter);
app.use('/product-Detail', productRouter);

//addproduct
app.use('/gotoaddproduct', gotoAddproductRouter)
app.use('/addproduct',addproductRouter)
//login
app.use('/login', loginRouter);
app.use('/member', memberRouter);
//logOut
app.use('/logout', logoutRouter);
//sign up
app.use('/register',registerRouter);
app.use('/signup',signUpRouter);
//cart
app.use('/addcart',addcartRouter);
app.use('/cart',cartRouter);
//deleteProduct
app.use('/deleteProduct',deleteProductRouter);

//checkout
app.use('/checkout',checkoutRouter);
app.use('/postcheckout',postcheckoutRouter);

// app.use('/post', postRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;