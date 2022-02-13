const fs = require('fs');
const archivoTareas = fs.readFileSync('./tareas.json')
const jsonParseado = JSON.parse(archivoTareas);

module.exports = jsonParseado;
