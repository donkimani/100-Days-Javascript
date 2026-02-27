// Implement your own class inheritance system
class Vehicle {
    constructor(name, model){
        this.name = name;
        this.model = model;
        this.to
    }

    details(){
        console.log(`${this.name}, model ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(name, model, color){
        super(name,model);
        this.color = color;
        this._topSpeed1 = '';
    }

    color2(){
        console.log(`we have a ${this.color} ${this.name} ${this.model}`);
    }
    details(){
        super.details();
        console.log(`we have this car called ${this.name} ${this.model} and its one of our best seller`);
    }
    set topSpeed(value){
        return this._topSpeed1 = value;
    }
    get topSpeed(){
        return `${this.name} ${this.model} maxes out at ${this._topSpeed1}`;
    }
}

const car1 = new Car('subaru', 'forester', 'black');
car1.color2()
car1.topSpeed = '186km/hr'
console.log(car1.topSpeed);
