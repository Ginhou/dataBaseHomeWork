var express = require('express');
var router = express.Router();

const addCartcontroller = require('../../../../controllers/doc/clinet/cart');

router.get('/', addCartcontroller.getAddcartBy );

module.exports = router;