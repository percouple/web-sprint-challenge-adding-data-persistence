/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('project', (table) => {
            table.increments('project_id').primary();
            table.string('project_name', 200).notNullable();
            table.string('project_description').nullable();
            table.boolean('project_completed').defaultTo(false);
        })
        .createTable('resource', (table) => {
            table.increments('resource_id').primary();
            table.string('resource_name').notNullable().unique();
            table.string('resource_description');
        })
        .createTable('task', (table) => {
            table.increments('task_id').primary();
            table.string('task_description').notNullable();
            table.string('task_notes').nullable();
            table.boolean('task_completed').defaultTo(false);
            table.integer('project_id').references('project_id').inTable('project');
        })
        .createTable('project_resources', (table) => {
            table.increments('project_resources_id').primary();
            table.integer('resource_id').references('resource_id').inTable('resource');
            table.integer('project_id').references('project_id').inTable('project');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};