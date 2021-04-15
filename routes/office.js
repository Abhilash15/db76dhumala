var express = require('express');
const office_controlers= require('../controllers/office');
var router = express.Router();
/* GET office */
router.get('/', office_controlers.office_view_all_Page);

/* GET detail office page */
router.get('/detail', office_controlers.office_view_one_Page);

module.exports = router;
