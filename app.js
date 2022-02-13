const jsonParseado = require('./funcionesDeTareas.js')

const proceso = process.argv[2]


switch(proceso){
  case 'listar':
    jsonParseado.forEach((tareas) =>console.log(tareas.titulo))
    
    break;
    case undefined:
      console.log('Atención - Tenes que pasar una acción')
      break;
      default:
        console.log('No entiendo qué queres hacer')
}


