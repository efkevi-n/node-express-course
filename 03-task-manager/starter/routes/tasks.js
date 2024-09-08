const express = require('express');
const router = express.Router();

const {getAllTasks, CreateTask, updateTask, deleteTask, getTask} = require('../controllers/tasks');  
const { get } = require('mongoose');


router.route('/').get(getAllTasks).post(CreateTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;