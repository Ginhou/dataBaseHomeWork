var express = require('express');

var router = express.Router();

const addProductController = require('../../../../controllers/doc/admin/addproduct');

router.get('/', addProductController.gotoAddProdouct);

module.exports = router;