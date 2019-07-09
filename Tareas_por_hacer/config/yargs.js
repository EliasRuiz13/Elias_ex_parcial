//tipos de comandos a ingresar de forma por alias ejemplo -d o comando completo --descripcion
const argv = require('yargs')
      .command('crear','Genera un elemento por hacer', {
      	descripcion: {
                demand: true,
                alias:'d',
                desc:'Descripcion de la tarea por hacer'
            }
      })
      .command('actualizar','Actualiza el estado por hacer', {
      	descripcion: {
                demand: true,
                alias:'d',
                desc:'Descripcion de la tarea por hacer'
            },
      completado: {
                demand: true,
                alias:'c',
                desc:'Marca como completado o pendiente la tarea'
            }
      })
      .command('borrar','Elimina una tarea', {
      	descripcion: {
                demand: true,
                alias:'d',
                desc:'Descripcion de la tarea por hacer'
            }
      })
      .help()
      .argv;
// exportar modulos para recibir los datos de cada unos de los archivos
module.exports = {
      argv
}