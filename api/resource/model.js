// build your `Resource` model here
const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

const getResources = async () => {
    return await db.select('*').from('resources')
}

const createNewResource = async (resource) => {
    return await db('resources').insert(resource)
}

module.exports = {
    getResources,
    createNewResource
}