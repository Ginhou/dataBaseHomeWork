var express = require('express');

var router = express.Router();

const checkoutController = require('../../../../controllers/doc/admin/checkout');

router.get('/', checkoutController.gotoSignUp);

router.post('/postcheckout',checkoutController.postCheckout);

module.exports = router;