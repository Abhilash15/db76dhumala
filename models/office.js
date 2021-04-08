const mongoose = require("mongoose")
const officeSchema = mongoose.Schema({
department: String,
size: Number,
strength: Number
})
module.exports = mongoose.model("office", officeSchema)