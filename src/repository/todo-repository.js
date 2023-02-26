const ToDo = require('../models/todo')

class TodoRepository {
    async create(data) {
        try {
            const todo = await ToDo.create(data);
            return todo;
        } catch (error) {
            console.log(error);
        }
    }
    async get(filter) {
        try {
            const todo = await ToDo.find(filter);
            return todo;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id) {
        try {
            const todo = await ToDo.findByIdAndRemove(id);
            return todo;
        } catch (error) {
            console.log(error);
        }
    }
    async update(id, data) {
        try {
            const todo = await ToDo.findByIdAndUpdate(id, data, { new: true });
            return todo;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TodoRepository;