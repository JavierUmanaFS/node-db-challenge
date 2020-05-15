
exports.up = function(knex) {
  return knex.schema
  .createTable("project", tbl =>{
    tbl.increments();
    tbl.text("project_name", 80).notNullable();
    tbl.text("description", 128);
    tbl.boolean("completed").defaultTo(false).notNullable();
  })
  .createTable("resource", tbl =>{
    tbl.increments();
    tbl.text("resource_name", 80).unique().notNullable();
    tbl.text("description", 128);
  })
  .createTable("task", tbl =>{
    tbl.increments();
    tbl.text("description", 128).notNullable();
    tbl.text("notes", 155);
    tbl.integer("project_id").unsigned().notNullable().references("project.id").onUpdate("CASCADE").onDelete("CASCADE");
    tbl.boolean("completed").defaultTo(false).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("task")
  .dropTableIfExists("resource")
  .dropTableIfExists("project");
};
