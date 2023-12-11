var express = require('express');
var router = express.Router();

/* GET ping page */
router.get('/', function (req, res, next) {
  res.send('pong');
});

module.exports = router;