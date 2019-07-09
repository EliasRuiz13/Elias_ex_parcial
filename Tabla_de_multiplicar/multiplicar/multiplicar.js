//importa las librerias y archivos
//require
const fs = require('fs');
var colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');
//Cabecera de la tabla con los datos del numero a multiplicar y el color introducido
let listarTabla=(base,limite = 10) =>{
	console.log('=================='.cyan);
	console.log(`Tabla de ${base}`.cyan);
	console.log('=================='.cyan);
   for(let i = 1; i<=limite; i++) {
			console.log( `${base} * ${i} = ${base * i}`)
		}
}
// la logica del sistema de multiplicacion tomando como base el numero tambien pudiendo introducir el limite
let crearArchivo=(base,limite=10)=>{
	return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        fs.writeFile(`Tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

        });

    });
}
//exportar los modulos de lectura
module.exports={
	crearArchivo,
	listarTabla
}