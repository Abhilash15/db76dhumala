var office = require('../models/office');
// List of all offices
//ex    orts.office_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: office list');
//};
exports.office_list = async function(req, res) {
    try{
        theoffices = await office.find();
        res.send(theoffices);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
    };

// Handle office create on POST.
exports.office_create_post = async function(req, res) {
    console.log(req.body)
    let document = new office();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"officetype":"goat", "cost":12, "size":"large"}
    document.department = req.body.department;
    document.strength = req.body.strength;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
   };
};
// Handle office delete form on DELETE.
// Handle office delete on DELETE.
exports.office_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await office.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle office update form on PUT.
//exports.office_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: office update PUT' + req.params.id);
//};

exports.office_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await office.findById( req.params.id)
        // Do updates of properties
        if(req.body.department) toUpdate.department = req.body.department;
        if(req.body.size) toUpdate.size = req.body.size;
        if(req.body.strength) toUpdate.strength = req.body.strength;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.office_view_all_Page = async function(req, res) {
    try{
    theoffices = await office.find();
    res.render('office', { title: 'office Search Results', results: theoffices });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

    exports.office_detail = async function(req, res) {
        console.log("detail"  + req.params.id)
        try {
            result = await office.findById( req.params.id)
            res.send(result)
        } catch (error) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
        }
    };