// // build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Database = require('./model');

// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
router.post('/', async (req, res, next) => {
    let payload = req.body;
    const id = payload.project_id;
    if (!id) {
        next({status: 400, message: "Don't do that"})
    }
    let taskArray = await Database.getTasks();
    const idArray = taskArray.map((item) => {
        return item.project_id;
    })
    await Database.createNewTask(payload)
        .then((result) => {
            if (payload.task_notes === undefined) {
                payload.task_notes = null;
            }
            if (payload.project_id === null || idArray.includes(id)) {
                console.log("NO PROJECT ID");
                throw Error;
            }
            [result] = result;
            payload = { ...payload, id: result }
            payload.task_completed = Boolean(payload.task_completed)
            res.status(200).json(payload)
        })
        .catch((err) => {
            console.log("REJECTING")
            next({status: 400, message: "Check required fields"})
        })
})

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
router.get('/', async (req, res, next) => {
    // res.status(200).json({ "resource_id": 1, "resource_name": "foo", "resource_description": null })
    await Database.getTasks()
    .then((result) => {
        result.forEach((item) => {
            item.task_completed = Boolean(item.task_completed);
            item.project_completed = Boolean(item.project_completed);
        })
        res.status(200).json(result)
    })
    .catch(next)
})

module.exports = router;