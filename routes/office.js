var express = require('express');
const office_controllers= require('../controllers/office');
var router = express.Router();
/* GET office */
router.get('/', office_controllers.office_view_all_Page);

/* GET detail office page */
router.get('/detail', office_controllers.office_view_one_Page);

/* GET create office page */
router.get('/create', office_controllers.office_create_Page);

/* GET create update page */
router.get('/update', office_controllers.office_update_Page);

/* GET create delete page */
router.get('/delete', office_controllers.office_delete_Page);



module.exports = router;
