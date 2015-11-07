var express = require('express');
var router = express.Router();
var mainJson = require('../json/main.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(mainJson);
});

module.exports = router;
