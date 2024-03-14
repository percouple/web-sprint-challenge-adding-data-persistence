// build your `Project` model here
const knex = require('knex');

const getProjects = () => {
    // return knex('projects')
    return Promise.reject({status: 404, message: 'I felt like it'})
}

const createNewProject = (project) => {

}

module.exports = {
    getProjects,
    createNewProject
}