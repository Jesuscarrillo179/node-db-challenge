
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('project', 100).notNullable()
      tbl.string('description', 1000)
      tbl.boolean('completed').notNullable().defaultTo(false)
  })
  .createTable('resources', tbl => {
    tbl.increments()
    tbl.string('resource', 100).notNullable()
    tbl.string('description', 1000)
})
.createTable('tasks', tbl => {
    tbl.increments()
    tbl.string('description', 1000).notNullable()
    tbl.string('notes', 1000)
    tbl.boolean('completed').notNullable().defaultTo(false)
    tbl.integer('project_id').unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
})
.createTable('project_resources', tbl => {
    tbl.increments()
    tbl.integer('project_id').unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    tbl.integer('resource_id').unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
