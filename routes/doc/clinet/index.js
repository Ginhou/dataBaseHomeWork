var express = require('express');
var indexController = require('../../../controllers/doc/clinet/index');
var router = express.Router();

router.get('/', indexController.getAllProduct);


module.exports = router;