import { Cl_fijo } from './Cl_fijo.js';

function leerDatosProfesorFijo() {
    const nombre = prompt("Nombre del profesor fijo:");
    const bono = parseFloat(prompt("Monto del bono:"));
    const sueldo = parseFloat(prompt("Monto del sueldo:"));
    
    const profesor = new Cl_fijo(nombre, bono, sueldo);
    console.log(`Ingreso total del profesor ${profesor.nombre}: $${profesor.getIngresoTotal()}`);
}

leerDatosProfesorFijo();
