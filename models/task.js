const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    content: String,
    author: String
});



const Task = new mongoose.model(
    "Task",
    taskSchema
)

const Prio = new mongoose.model(
    "Priority",
    taskSchema
)

const Work = new mongoose.model(
    "Work-task",
    taskSchema
);



const items = [Task, Prio, Work];



module.exports = items;