// // build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Database = require('./model');

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`
router.get('/', async (req, res, next) => {
    // res.status(200).json({ "resource_id": 1, "resource_name": "foo", "resource_description": null })
    await Database.getResources()
    .then((result) => {
        res.status(200).json(result)
    })
    .catch(next)
})

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`
router.post('/', async (req, res, next) => {
    let payload = req.body;
    await Database.createNewResource(payload)
        .then((result) => {
            res.status(200).json(payload)
        })
        .catch((err) => {
            next({status: 400, message: "Check required fields"})
        })
})

module.exports = router;