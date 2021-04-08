var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var office_controller = require('../controllers/office');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// office ROUTES ///
// POST request for creating a office.
router.post('/office', office_controller.office_create_post);
// DELETE request to delete office.
router.delete('/office/:id', office_controller.office_delete);
// PUT request to update office.
router.put('/office/:id', office_controller.office_update_put);
// GET request for one office.
router.get('/office/:id', office_controller.office_detail);
// GET request for list of all office items.
router.get('/office', office_controller.office_list);
module.exports = router;