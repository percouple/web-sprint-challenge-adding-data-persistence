// build your `Project` model here
const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

const getProjects = async () => {
    return await db('projects')
}

const createNewProject = async (project) => {
    return await db('projects').insert(project)
}

module.exports = {
    getProjects,
    createNewProject
}