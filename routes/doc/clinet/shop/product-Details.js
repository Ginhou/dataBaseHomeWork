var express = require('express');

var router = express.Router();

const productController = require('../../../../controllers/doc/clinet/product');

router.get('/', productController.getProductByNo);
    
     
module.exports = router;