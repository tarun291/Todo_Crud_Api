const mongoose = require('mongoose')

const connet = async () => {
    await mongoose.connect('mongodb://localhost/todo_dev');
}

module.exports = connet