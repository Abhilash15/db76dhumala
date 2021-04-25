const mongoose = require("mongoose")
const officeSchema = mongoose.Schema({
department:{
type: String,
min_length_str :5,
max_length_str:30
},
size: {
    type:Number,
    min_value :1,
    max_value:100
},
strength:{
    type: Number,
    min:1,
    max:100,
}
})
module.exports = mongoose.model("office", officeSchema)