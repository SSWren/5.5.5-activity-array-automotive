//this includes the vehicle class as a module

const vehicleModule = require("./vehicle.js");

class Car extends vehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    
    loadPassenger(num) {
        if (this.passenger <= maximumPassengers) {
            return this.availableRoom = true;
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
        }
    }

    serviceNeeded(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService = true;
        }
    }
}

//this shows how to call from this module...
let v = new vehicleModule("Mercury", "Sedan", "2010", "Yellow", "120000");
console.log(v.make);
