var express = require('express');
var router = express.Router();

const loginControllers= require('../../../../controllers/doc/admin/login');

router.post('/', loginControllers.postLogin);


module.exports = router;