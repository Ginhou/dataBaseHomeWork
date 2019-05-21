var express = require('express');
var router = express.Router();

const signup = require('../../../../controllers/doc/admin/signup');

router.get('/', signup.gotoSignUp);

module.exports = router;