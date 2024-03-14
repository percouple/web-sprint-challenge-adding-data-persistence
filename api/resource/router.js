// // build your `/api/resources` router here
const express = require('express');
const router = express.Router();

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`
router.get('/', (req, res) => {
    res.status(200).json({ "resource_id": 1, "resource_name": "foo", "resource_description": null })
})

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`
router.post('/', (req, res) => {
    res.status(200).json({ "resource_id": 1, "resource_name": "foo", "resource_description": null })
})

module.exports = router;