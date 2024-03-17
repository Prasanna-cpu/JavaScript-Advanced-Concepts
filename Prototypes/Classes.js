

class Vehicle{
    constructor(){
        this.doors=4
        this.hasInsurance=true
    }

    ready(){
        return "Ready to go!"
    }
}

class Motorcycle extends Vehicle{
    constructor(){
        super();
        this.wheels=2
    }

    wheelie(){
        return "On one wheel now!"
    }
}

const myBike=new Motorcycle();
console.log(myBike)


console.log(myBike.doors)
console.log(myBike.hasInsurance)


const myTruck=new Vehicle();
console.log(myTruck.hasInsurance)
