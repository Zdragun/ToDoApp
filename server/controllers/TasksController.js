const Task = require("../models/TaskModel.js")

const getTasks = async (req, res) => {
    try {
        const fetchTasks = await Task.find();
        res.send(fetchTasks);
    } catch (error) {
        console.log(error);
    }

}

const createTasks = async (req, res) => {
    const { taskname, description, isFinished } = req.body;
    try {
        const findTask = await Task.findOne({ taskname })
        if (!findTask) {
            const createTask = await Task.create({ taskname, description, isFinished });
            res.json(createTask);
        }
        else {
            res.send("User alredy exists")
        }
    } catch (error) {
        console.log(error);
    }
}
const updateTask = async (req, res) => {
    const { taskname, description, isFinished } = req.body;
    const { id } = req.params;
    console.log(id);
    try {
        const updateTask = await Task.findByIdAndUpdate({ _id: id }, { taskname, description, isFinished }, { new: true })
        res.json(updateTask);

    } catch (error) {
        console.log(error);
    }
}
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTask = await Task.findByIdAndDelete({_id:id});
        res.json(deleteTask);
    } catch (error) {
    console.log(error);
}
}

const singleTask = async (req, res) => {
    const { id } = req.params;
    try {
        const getTaskById = await Task.findById({_id:id});
        res.json(getTaskById)
    } catch (error) {
    console.log(error);
}
}

const removeAllTasks = async(req,res)=>
{
    try {
        const tasksRemove = await Task.deleteMany({});
        res.json(tasksRemove);
    } catch (error) {
        console.log(error);
    }
}

const getTasksCount = async(req,res)=>
{
    try {
        const tasklength = await Task.countDocuments();
        console.log(tasklength);
        res.json(tasklength)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getTasks, createTasks, updateTask, deleteTask,singleTask,removeAllTasks,getTasksCount };