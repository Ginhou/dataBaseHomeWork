var express = require('express');

var router = express.Router();

const signUpController = require('../../../../controllers/doc/admin/signup');

router.post('/', signUpController.postSignUp);

module.exports = router;