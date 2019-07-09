const fs = require('fs');

let listadoPorHacer = [];
//guardar en al base de datos y cargar la base de datos redirigido al archivo json
const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile('db/data.json',data,(err)=>{
		if(err) throw new Error('No se pudo grabar',err);
	});
}
const cargarDB = () => {
	try{
	listadoPorHacer = require('../db/data.json');
	 } catch(error) {
    listadoPorHacer = [];
    }
}
//crear tarea directamente sin alias
const crear = (descripcion) => {

	cargarDB();

   let porHacer= {
       descripcion,
       completado: false
   };

   listadoPorHacer.push(porHacer);
   guardarDB();
   return porHacer;
}
//listado de las tareas por realizar
const getListado = () => {
	cargarDB();
	return listadoPorHacer;
}
//actualizar estado de la tarea pendiente
const actualizar = (descripcion, completado = true) => {
	cargarDB();

	let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
	if (index >= 0){
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	} else {
		return false;
	}
}
//borrar tarea de la base de datos
const borrar = (descripcion) => {
	cargarDB();
	let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
	if (listadoPorHacer.length === nuevoListado.length){
		return false;
	} else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
	}
}
// exportar modulos para recibir los datos de cada unos de los archivos
module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}