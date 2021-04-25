const mongoose = require("mongoose")
const officeSchema = mongoose.Schema({
department: String,
size: Number,
strength:{
    type: Number,
    min:1,
    max:100,
}
})
module.exports = mongoose.model("office", officeSchema)