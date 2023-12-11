class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName = () => {
        console.log(this.nombre);
    }
    showStats = () => {
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
    }
    drinkSake = () => {
        this.salud += 10;
    }
}

let leonardo = new Ninja("Leonardo", 100);
leonardo.sayName();
leonardo.showStats();
leonardo.drinkSake();
leonardo.showStats();