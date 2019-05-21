var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.clearCookie('username');
    res.clearCookie('isLogin');
    res.clearCookie('mId');
    res.redirect('/');
});

module.exports = router;
