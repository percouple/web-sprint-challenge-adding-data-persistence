// // build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Database = require('./model');

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
router.get('/', async (req, res, next) => {
    await Database.getProjects()
        .then((result) => {
            result.forEach((item) => {
                item.project_completed = Boolean(item.project_completed)
            })
            res.status(200).json(result)
        })
        .catch(next)
})

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
router.post('/', async (req, res, next) => {
    let payload = req.body;
    await Database.createNewProject(payload)
        .then((result) => {
            if (!payload.project_name) {
                throw Error;
            }
            if (payload.project_completed === undefined) {
                payload.project_completed = false;
            }
            payload.project_completed = Boolean(payload.project_completed);
            [result] = result;
            payload = { ...payload, id: result }
            res.status(200).json(payload)
        })
        .catch((err) => {
            next({status: 400, message: "Check required fields"})
        })
})

module.exports = router;