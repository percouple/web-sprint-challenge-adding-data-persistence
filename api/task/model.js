// build your `Task` model here
const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

const getTasks = async () => {
    return await db
    .select('*')
    .from('tasks')
    .leftJoin('projects', 'projects.project_id', '=', 'tasks.project_id');
}

const createNewTask = async (resource) => {
    return await db('tasks').insert(resource)
}

module.exports = {
    getTasks,
    createNewTask
}