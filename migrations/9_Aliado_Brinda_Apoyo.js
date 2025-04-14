exports.up = function(knex) {
    return knex.schema.createTable('Aliado_Brinda_Apoyo', (table) => {
        table.increments('idBrinda').primary();
        table.integer('idAliado').notNullable(); //idAliado del aliado que brinda el apoyo
        table.foreign('idAliado').references('idAliado').inTable('Aliado'); //Foreing key de la tabla Aliado
        table.integer('idApoyo').notNullable(); //idApoyo del apoyo que brinda el aliado
        table.foreign('idApoyo').references('idApoyo').inTable('Apoyo'); //Foreing key de la tabla Apoyo
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Aliado_Brinda_Apoyo');
};
