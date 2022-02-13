const fs = require('fs')
console.log
const jsonParseado = require('./funcionesDeTareas.js')

const leerJSON = () => console.log(jsonParseado)

let agregandoTarea = tarea.push({titulo: 'Nueva Tarea', estado: 'pendiente'})
  tarea = [...jsonParseado,agregandoTarea]
  console.log(tarea)
 // let tareasNuevasATexto = JSON.stringify(tareasNuevas);
  //let escribirTareasEnArchivoNuevo = fs.writeFileSync('./tareas.json',tareasNuevas)


/*const guardarTarea = (tarea,callback) => {
  tarea = {
    titulo : 'Nueva Tarea',
    estado : 'pendiente'
  }
  callback(tareasNuevas)
}*/

escribirJSON()

