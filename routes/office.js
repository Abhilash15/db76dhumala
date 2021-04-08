var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('office', { title: 'Search Results office' });
});

module.exports = router;
