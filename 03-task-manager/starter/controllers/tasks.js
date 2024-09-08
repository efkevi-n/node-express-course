const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.send(req.body);
}
const CreateTask = async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

const getTask = (req, res) => {
    res.send(req.body);
}

const updateTask = (req, res) => {
    res.send(
    req.body
    );
}


const deleteTask = (req, res)=> {
    res.send(req.body);
}


module.exports = {
    getAllTasks,
    CreateTask,
    getTask,
    updateTask,
    deleteTask
}