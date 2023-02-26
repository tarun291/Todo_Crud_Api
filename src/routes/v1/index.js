const express = require('express');

const ToDoController = require('../../controllers/todo-controller');

const router = express.Router();

router.post('/new', ToDoController.create);
router.get('/read', ToDoController.getAll);
router.delete('/delete/:id', ToDoController.destroy);
router.patch('/update/:id', ToDoController.update);

module.exports = router;