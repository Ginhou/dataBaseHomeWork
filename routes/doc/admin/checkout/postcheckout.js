var express = require('express');

var router = express.Router();

const checkoutController = require('../../../../controllers/doc/admin/checkout');



router.post('/',checkoutController.postCheckout);

module.exports = router;