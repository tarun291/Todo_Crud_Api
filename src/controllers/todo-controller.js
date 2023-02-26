const TodoService = require('../services/todo-service')


const todoService = new TodoService();



const create = async (req, res) => {
    try {
        const todo = await todoService.createTodo(req.body);
        return res.status(201).json({
            data: todo,
            sucess: true,
            message: 'Successfully created a todo',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a todo',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await todoService.destroyTodo(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully deleted a todo',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to delete the todo',
            err: error,
        })
    }
}
const getAll = async (req, res) => {
    try {
        const todos = await todoService.getTodo(req.query);
        console.log(req.query);
        return res.status(200).json({
            data: todos,
            sucess: true,
            message: 'All todos fetched sucessfully ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to fetch the todos',
            err: error,
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await todoService.updateTodo(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'A Todo successfully updated',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to update the todo',
            err: error,
        })
    }
}
module.exports = {
    create,
    destroy,
    update,
    getAll
}