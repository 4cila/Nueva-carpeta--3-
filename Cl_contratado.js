import { Cl_profesor } from './Cl_profesor.js';

export class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, horas) {
        super(nombre, bono);
        this.horas = horas;
        this.pagoPorHora = 10;
    }

    getIngresoTotal() {
        return super.getIngresoTotal() + (this.horas * this.pagoPorHora);
    }
}
