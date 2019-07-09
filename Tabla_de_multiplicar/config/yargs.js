//optimizacion de la base a introducir y el limite estipulado por el usuario
const opts = {
      base: {
                demand: true,
                alias:'b'
            },
      limite: {
                alias:'l',
                default:10
            }
}
// mensajes de cada uno de los comandos
const argv = require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar', opts)
            .command('crear','Genera un archivo con la tabla de multiplicar', opts)
            .help()
            .argv;
//exportacion de los modulos de lectura
module.exports = {
      argv
}