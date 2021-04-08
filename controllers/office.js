var office = require('../models/office');
// List of all offices
exports.office_list = function(req, res) {
 res.send('NOT IMPLEMENTED: office list');
};
// for a specific office.
exports.office_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: office detail: ' + req.params.id);
};
// Handle office create on POST.
exports.office_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: office create POST');
};
// Handle office delete form on DELETE.
exports.office_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: office delete DELETE ' + req.params.id);
};
// Handle office update form on PUT.
exports.office_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: office update PUT' + req.params.id);
};