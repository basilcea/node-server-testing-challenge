
exports.up = function(knex) {
  return knex.schema
    .createTable('Users',  tbl =>{
      tbl.increments();
      tbl.string('username', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('deparments', 128).notNullable();
  })
  .createTable('Records', rec =>{
      rec.increments();
      rec.integer('employeeId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('Users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      rec.string('salary',128).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Records')
    .dropTableIfExists('Users')
};
