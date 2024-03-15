// build your server here and require it from index.js
const express = require('express');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();
server.use(express.json())

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);


// Errorhandler
server.use((err, req, res, next) => {
    console.log(err)
    const status = err.status || 500;
    const message = { message: err.message || "Internal server error" };
    res.status(status).json(message)
})

module.exports = server;