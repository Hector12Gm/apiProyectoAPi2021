var express = require('express');
var router = express.Router();
let c_users = require('../controllers/c_users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',c_users.login);
router.post("/signup",c_users.signup);

module.exports = router;
