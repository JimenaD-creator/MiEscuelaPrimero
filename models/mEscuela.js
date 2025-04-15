//Model de representante para tener las funciones que haran las consultas a la base de datos
const db = require('../db.js');

//Funciones para AdminModel
const EscuelaModel = {
    //Apartado de registro de Admin
    //Este apartado es para crear un nuevo administrador, se le asigna un id_admin automaticamente
    createEscuela: (escuelData) => db('Escuela').insert({
        CCT: escuelData.CCT,
        nombre: escuelData.nombre,
        modalidad: escuelData.modalidad,
        nivel_educativo: escuelData.nivel_educativo,
        sector_escolar: escuelData.sector_escolar,
        sostenimiento: escuelData.sostenimiento,
        zona_escolar: escuelData.zona_escolar,
        calle: escuelData.calle,
        colonia: escuelData.colonia,
        municipio: escuelData.municipio,
        numero: escuelData.numero,
        descripcion: escuelData.descripcion,
        control_administrativo: escuelData.control_administrativo,
        numero_estudiantes: escuelData.numero_estudiantes,
    }),
    
    //Apartado de actualización de datos
    updateEscuelaName: (CCT, nuevoNombre) => db('Escuela').where({ CCT }).update({ nombre: nuevoNombre }),
    updateEscuelaModalidad: (CCT, nuevaModalidad) => db('Escuela').where({ CCT }).update({ modalidad: nuevaModalidad }),
    updateEscuelaDescripcion: (CCT, nuevaDescripcion) => db('Escuela').where({ CCT }).update({ descripcion: nuevaDescripcion }),
    updateEscuelaControl_administrativo: (CCT, nuevoControl) => db('Escuela').where({ CCT }).update({ control_administrativo: nuevoControl }),
    updateEscuelaNumero_estudiantes: (CCT, nuevoNumero) => db('Escuela').where({ CCT }).update({ numero_estudiantes: nuevoNumero }),


    //Obtener datos de las escuelas
    getEscuelaById: (CCT) => db('Escuela').where({ CCT }).first(), //Regresa UN solo objeto gracias al .first()
    getEscuelaByNombre: (nombre) => db('Escuela').where({ nombre }).select('*'), //Regresa todos los objetos que tengan el mismo nombre
    getEscuelaByMunicipio: (municipio) => db('Escuela').where({ municipio }).select('*'), //Regresa todos los objetos que tengan el mismo municipio
    getEscuelaByZona_escolar: (zona_escolar) => db('Escuela').where({ zona_escolar }).select('*'), //Regresa todos los objetos que tengan la misma zona escolar
    getEscuelaByNivel_educativo: (nivel_educativo) => db('Escuela').where({ nivel_educativo }).select('*'), //Regresa todos los objetos que tengan el mismo nivel educativo
    getEscuelaBySector_escolar: (sector_escolar) => db('Escuela').where({ sector_escolar }).select('*'), //Regresa todos los objetos que tengan el mismo sector escolar
    getAllEscuelas: () => db('Escuela').select('*'), //Regresa todos los objetos de la tabla en un array gracias al .select('*')
};

module.exports = EscuelaModel; //Exportamos el modelo para usarlo en otros archivos