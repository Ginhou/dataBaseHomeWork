var express = require('express');

var router = express.Router();

const cartController = require('../../../../controllers/doc/clinet/cart');

router.get('/', cartController.getCartProduct);

     
module.exports = router;