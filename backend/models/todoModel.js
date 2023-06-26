const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    tittle: {
        type:String,
        required : true
    },
    content:{
        type:String,
        required : true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Todo"
    }
   
})

module.exports = mongoose.model("Todo",todoSchema)