/**
 * @interface Drivable [This interface has properties and methods related to driving a car]
 * @param {number} speed [This is used to set the speed of the car]
 */
interface Drivable {

    speed: number;

    start(): void;
    drive(speed: number): string;
    getPosition(time: number): number;

}

/**
 * @class Car
 * @implements Drivable
 */
class Car implements Drivable {

    carNum: string;
    model: string;
    speed: number;

    /**
     * [constructor: This function sets the values of instance variables 'carNum' and 'model']
     * @param {string} carNum [This is the car's number]
     * @param {number} model [This is the car's model]
     */
    constructor ( carNum: string, model: string ) {

        this.carNum = carNum;
        this.model = model;

    }

    /**
     * [start: This function is used to start the car]
     * no parameters
     * @return {string} [A message is notified that the car is started]
     */
    start(): string {

        return `The car ${this.model} with car number "${this.carNum}" is started.`;

    }

    /**
     * [drive: This function is used to drive the car]
     * @param {number} speed [This value represents the speed of the car in km/hr]
     * @return {number} [A message is returned containing the speed of the car]
     */
    drive(speed: number): string {

        this.speed = speed;
        return `The car is driven at a speed of ${speed} km per hour.`;

    }

    /**
     * [getPosition: This function is used to calculate the distance travelled by the car]
     * @param {number} time [This is the time in hrs that the car has been running]
     * @return {number} [The distance covered by the car is returned]
     */
    getPosition(time: number): number {

        let distance: number;
        distance = this.speed * time;
        return distance;

    }

}

// Creating an instance of Car class
let car = new Car('KA 25 J 3728', 'Ford Fiesta');

// Starting the car
document.getElementById("start").innerHTML = car.start();

// Driving the car
document.getElementById("drive").innerHTML = car.drive(90);

// Getting the position of the car
let timeTravelled: number = 3;
let position: number = car.getPosition(timeTravelled);

// Displaying the position of the car
document.getElementById("position").innerHTML = `The car has travelled ${position} kms in ${timeTravelled} hrs.`;
