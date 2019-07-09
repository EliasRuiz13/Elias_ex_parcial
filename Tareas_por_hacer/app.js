//importacion de los archivos
//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
//comandos crear, listar, actualizar, borrar y mensaje de error en listado una cabecera con colores incluidos a la tarea asignada
switch( comando ){

  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
  break;
  case 'listar':

    let listado = porHacer.getListado();

    for(let tarea of listado) {
    	console.log('=====Por Hacer====='.cyan);
    	console.log(tarea.descripcion);
    	console.log('Estado:', tarea.completado);
    	console.log('==================='.cyan);
    }
  break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
  break;

  case 'borrar':
  let borrado = porHacer.borrar(argv.descripcion);
  console.log(borrado);
  break;

  default:
  console.log('Comando no es reconocido');
}