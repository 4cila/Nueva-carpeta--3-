class Cl_profesor {
    constructor(nombre, bono) {
        this.nombre = nombre;
        this.bono = bono;
    }

    ingresoTotal() {
        return this.bono;
    }
}

class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }

    ingresoTotal() {
        return super.ingresoTotal() + this.sueldo;
    }
}

class Cl_contratado extends Cl_profesor {
    constructor(nombre, bono, horas) {
        super(nombre, bono);
        this.horas = horas;
        this.tarifaPorHora = 10;
    }

    ingresoTotal() {
        return super.ingresoTotal() + (this.horas * this.tarifaPorHora);
    }
}

class Cl_main {
    static main() {
        const profesor1 = new Cl_fijo('Carlos', 25, 100);
        console.log(`Ingreso total del profesor ${profesor1.nombre}: $${profesor1.ingresoTotal()}`);

        const profesor2 = new Cl_fijo('Carolina', 40, 90);
        console.log(`Ingreso total del profesor ${profesor2.nombre}: $${profesor2.ingresoTotal()}`);
    }
}

Cl_main.main();
