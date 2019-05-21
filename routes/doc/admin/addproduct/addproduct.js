var express = require('express');

var router = express.Router();

const addProductController = require("../../../../controllers/doc/admin/addproduct");

router.post('/', addProductController.postAddProduct);

module.exports = router;