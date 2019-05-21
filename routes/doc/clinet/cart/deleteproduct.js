var express = require('express');

var router = express.Router();

const cartController = require('../../../../controllers/doc/clinet/cart');

router.get('/', cartController.deleteCartProductById);

     
module.exports = router;