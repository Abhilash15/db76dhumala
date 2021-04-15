var express = require('express');
const office_controlers= require('../controllers/office');
var router = express.Router();
/* GET office */
router.get('/', office_controlers.office_view_all_Page);

/* GET detail office page */
router.get('/detail', office_controlers.office_view_one_Page);

/* GET create office page */
router.get('/create', office_controlers.office_create_Page);

/* GET create update page */
router.get('/update', office_controlers.office_update_Page);

/* GET create delete page */
router.get('/delete', office_controlers.office_delete_Page);



module.exports = router;
