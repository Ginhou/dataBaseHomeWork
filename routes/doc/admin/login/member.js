var express = require('express');

var router = express.Router();

const productController = require('../../../../controllers/doc/admin/login');

router.get('/', productController.gotoLogin);

module.exports = router;