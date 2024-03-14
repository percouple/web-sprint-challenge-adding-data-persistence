// build your `Project` model here
const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

const getProjects = async () => {
    return await db('project')
    // return Promise.resolve()
}

const createNewProject = (project) => {

}

module.exports = {
    getProjects,
    createNewProject
}