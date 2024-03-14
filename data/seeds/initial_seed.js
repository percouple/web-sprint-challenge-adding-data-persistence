/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('project').del()
  await knex('resource').del()
  await knex('task').del()
  await knex('project_resources').del()
  await knex('project').insert([
    { "project_name": "bar", "project_description": null, "project_completed": false },
    { "project_name": "barfd", "project_description": "hkfdjshfkjdshf", "project_completed": false },
    { "project_name": "barasfasdf", "project_description": null, "project_completed": false }
  ]);
  await knex('resource').insert([
    { "resource_name": "foo", "resource_description": null },
    { "resource_name": "fojhfjfjho", "resource_description": "A BIG O;l CANDLE" },
    { "resource_name": "fo457654o", "resource_description": null },
    { "resource_name": "forshsjsjsjjsjo", "resource_description": "SEVERAL LARGE CATS" }
  ])
  await knex('task').insert([
    { "task_description": "bfhfhfhf", "task_notes": null, "task_completed": false, "project_id": 1 },
    { "task_description": "bazsafdad", "task_notes": "some", "task_completed": false, "project_id": 1 },
    { "task_description": "basdfasdfaaz", "task_notes": null, "task_completed": false, "project_id": 2 },
    { "task_description": "bk;;;llllkaz", "task_notes": "I've got some notes for ya", "task_completed": false, "project_id": 2 },
    { "task_description": "bazgytughj", "task_notes": null, "task_completed": false, "project_id": 3 }
  ])
  await knex('project_resources').insert([
    { "resource_id": 1, "project_id": 1},
    { "resource_id": 1, "project_id": 2},
    { "resource_id": 1, "project_id": 3},
    { "resource_id": 2, "project_id": 2},
    { "resource_id": 1, "project_id": 3},
    { "resource_id": 2, "project_id": 3},
  ])
};
