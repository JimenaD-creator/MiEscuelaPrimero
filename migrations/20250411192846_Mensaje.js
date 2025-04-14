exports.up = function(knex) {
    return knex.schema.createTable('Mensaje', (table) => {
        table.increments('idMensaje').primary();
        table.string('contenido').notNullable();
        table.string('fecha_hora').notNullable();
        table.foreign('idChat').references('idChat').inTable('Chat').notNullable(); //Foreing key de la tabla Chat
        table.string('emisor').notNullable(); // Nombre del emisor, registrado al enviar el mensaje
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Mensaje');
};
