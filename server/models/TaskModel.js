const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
    taskname:
    {
        type: String,
        required: true,
    },
    description:
    {
        type: String,
        required: true,
    },
    isFinished:
    {
        type:Boolean,
        default:false
    }

}, { timestamps: true })


module.exports = mongoose.model("Task", taskModel);