const mongoose = require('mongoose');

const todoShema = new mongoose.Schema({
    detail: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean
    }
}, { timestamps: true })


const ToDo = mongoose.model('ToDo', todoShema);
module.exports = ToDo
