
exports.up = function(knex) {
  return knex.schema.createTable('Onit', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('Zap').notNullable();
      table.string('Cidy').notNullable();
      table.string('UF', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Onit');
};
