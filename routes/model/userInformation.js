const mongoose = require('mongoose')
// import mongoose from "mongoose"
var typeSchema = mongoose.Schema({
    username:{"type":String,require:true},
    emailid:{"type":String,require:true ,unique:true},
    password:{"type":String,requrie:true}

})

module.exports =mongoose.model("userinformation",typeSchema)