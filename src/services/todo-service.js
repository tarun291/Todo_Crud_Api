const TodoRepository = require('../repository/todo-repository');

class TodoService {
    constructor() {
        this.todoRepository = new TodoRepository();
    }
    async createTodo(data) {
        try {
            const todo = await this.todoRepository.create(data);
            return todo;
        } catch (error) {
            console.log(error)
        }
    }
    async getTodo(filter) {
        try {
            const todo = await this.todoRepository.get(filter);
            return todo;
        } catch (error) {
            console.log(error)
        }
    }
    async destroyTodo(id) {
        try {
            const todo = await this.todoRepository.destroy(id);
            return todo;
        } catch (error) {
            console.log(error)
        }
    }
    async updateTodo(id, data) {
        console.log(id,data);
        try {
            const todo = await this.todoRepository.update(id, data);
            return todo;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TodoService;