const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const dbConnect = require("./config/dbConnect");
const taskRoute =require("./routes/taskRoutes");

const app = express();

dotenv.config();

dbConnect();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/tasks",taskRoute);

module.exports = app;