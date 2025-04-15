//Model de Representante, para tener las funciones que haran las consultas a la base de datos
const db = require('../db.js');

const RepresentanteModel = {

    /*Dejaremos en false por default a proximo_a_jubilarse y cambio_zona, ya que no se sabe si el representante se jubilará
    o no, y tampoco si cambiará de zona por lo tanto, no son obligatorios al momento de crear un nuevo representante*/

    //Este apartado es para crear un nuevo representante, se le asigna un idRepresentante automaticamente
    createRepresentante: (repreData) => db('Representante').insert({
        nombre: repreData.nombre,
        correo_electronico: repreData.correo_electronico,
        contrasena: repreData.contrasena,
        numero_telefonico: repreData.numero_telefonico,
        rol: repreData.rol,
        anios_experiencia: repreData.anios_experiencia,
        proximo_a_jubilarse: repreData.proximo_a_jubilarse || false, //se agrega el false para que no sea obligatorio
        cambio_zona: repreData.cambio_zona || false, //se agrega el false para que no sea obligatorio
    }),
    
    //Apartado de actualización de datos
    updateRepresentanteName: (idRepresentante, nuevoNombre) => db('Representante').where({ idRepresentante }).update({ nombre: nuevoNombre }),
    updateRepresentanteMail: (idRepresentante, nuevoCorreo) => db('Representante').where({ idRepresentante }).update({ correo_electronico: nuevoCorreo }),
    updateRepresentantePass: (idRepresentante, nuevaContrasena) => db('Representante').where({ idRepresentante }).update({ contrasena: nuevaContrasena }),
    updateRepresentantePhone: (idRepresentante, nuevoTelefono) => db('Representante').where({ idRepresentante }).update({ numero_telefonico: nuevoTelefono }),
    updateRepresentanteRol: (idRepresentante, nuevoRol) => db('Representante').where({ idRepresentante }).update({ rol: nuevoRol }),
    updateRepresentanteanios_experiencia: (idRepresentante, nuevoAnios) => db('Representante').where({ idRepresentante }).update({ anios_experiencia: nuevoAnios }),
    updateRepresentanteproximo_a_jubilarse: (idRepresentante, nuevoProximo) => db('Representante').where({ idRepresentante }).update({ proximo_a_jubilarse: nuevoProximo }),
    updateRepresentanteCambio_zona: (idRepresentante, nuevoCambio) => db('Representante').where({ idRepresentante }).update({ cambio_zona: nuevoCambio }),

    //Apartado para obtener datos del representante/es
    getRepresentanteById: (idRepresentante) => db('Representante').where({ idRepresentante }).first(), //Regresa UN solo objeto gracias al .first()
    getRepresentanteByMail: (correo_electronico) => db('Representante').where({ correo_electronico }).first(), //Regresa UN solo objeto gracias al .first()
    getRepresentanteByPhone: (numero_telefonico) => db('Representante').where({ numero_telefonico }).first(), //Regresa UN solo objeto gracias al .first()
    getRepresentantePass: (contrasena) => db('Representante').where({ contrasena }).first(), //Regresa UN solo objeto gracias al .first()
    getRepresentanteByanios_experiencia: (anios_experiencia) => db('Representante').where({ anios_experiencia }).first(), //Regresa UN solo objeto gracias al .first()
    getRepresentanteByproximo_a_jubilarse: (proximo_a_jubilarse) => db('Representante').where({ proximo_a_jubilarse }).first(), //Regresa UN solo objeto gracias al .first()
    getRepresentanteByCambio_zona: (cambio_zona) => db('Representante').where({ cambio_zona }).first(), //Regresa UN solo objeto gracias al .first()
    getAllRepresentantes: () => db('Representante').select('*'), //Regresa todos los objetos de la tabla en un array gracias al .select('*')
};

module.exports = RepresentanteModel; //Exportamos el modelo para usarlo en otros archivos