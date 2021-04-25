var express = require('express');
const office_controllers= require('../controllers/office');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET office */
router.get('/', office_controllers.office_view_all_Page);

/* GET detail office page */
router.get('/detail', office_controllers.office_view_one_Page);

/* GET create office page */
router.get('/create', secured, office_controllers.office_create_Page);

/* GET create update page */
router.get('/update', secured, office_controllers.office_update_Page);

/* GET create delete page */
router.get('/delete', secured, office_controllers.office_delete_Page);



module.exports = router;
