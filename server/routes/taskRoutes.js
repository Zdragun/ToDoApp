const express = require("express");
const {getTasks,createTasks, updateTask, deleteTask, singleTask, removeAllTasks, getTasksCount} = require("../controllers/TasksController")
const router = express.Router();

router.post("/create-tasks",createTasks);

router.put("/update-tasks/:id",updateTask);

router.get("/get-tasks",getTasks);

router.get("/get-tasks-count",getTasksCount);

router.get("/get-single-task/:id",singleTask);

router.delete("/delete-tasks/:id",deleteTask);

router.delete("/remove-all-tasks",removeAllTasks);


module.exports = router;