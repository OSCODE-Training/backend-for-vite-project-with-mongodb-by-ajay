const mongoose = require('mongoose')
var typeSchema = mongoose.Schema({
    emailid:{"type":String,require:true},
    content:{"type":String,require:true}

})

module.exports =mongoose.model("alldata",typeSchema)