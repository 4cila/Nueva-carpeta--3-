import { Cl_profesor } from './Cl_profesor.js';

export class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }

    getIngresoTotal() {
        return super.getIngresoTotal() + this.sueldo;
    }
}
