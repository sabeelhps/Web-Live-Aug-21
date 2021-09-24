

// class Person{

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayName() {
//         return this.name;
//     }
// }


// const p1 = new Person('Kartik', 26);
// const p2 = new Person('Sabeel', 22);


// -----------------------------------

class Car{

    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    getCarName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }
}


class RacingCar extends Car{

    constructor(name, color, price, maxSpeed, isDiscBrake) {
        
        super(name,color,price) //calling the parent class constructor

        this.maxSpeed = maxSpeed;
        this.isDiscBrake = isDiscBrake;
    }

    get getMaxSpeed() {
        return this.maxSpeed;
    }


}

// let c1 = new Car('Audi', 'Black', 2000000);


const r1 = new RacingCar('BMW', 'red', 300000, 400, true);
