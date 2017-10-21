/**
 * @class Car
 * @implements Drivable
 */
var Car = /** @class */ (function () {
    /**
     * [constructor: This function sets the values of instance variables 'carNum' and 'model']
     * @param {string} carNum [This is the car's number]
     * @param {number} model [This is the car's model]
     */
    function Car(carNum, model) {
        this.carNum = carNum;
        this.model = model;
    }
    /**
     * [start: This function is used to start the car]
     * no parameters
     * @return {string} [A message is notified that the car is started]
     */
    Car.prototype.start = function () {
        return "The car " + this.model + " with car number \"" + this.carNum + "\" is started.";
    };
    /**
     * [drive: This function is used to drive the car]
     * @param {number} speed [This value represents the speed of the car in km/hr]
     * @return {number} [A message is returned containing the speed of the car]
     */
    Car.prototype.drive = function (speed) {
        this.speed = speed;
        return "The car is driven at a speed of " + speed + " km per hour.";
    };
    /**
     * [getPosition: This function is used to calculate the distance travelled by the car]
     * @param {number} time [This is the time in hrs that the car has been running]
     * @return {number} [The distance covered by the car is returned]
     */
    Car.prototype.getPosition = function (time) {
        var distance;
        distance = this.speed * time;
        return distance;
    };
    return Car;
}());
// Creating an instance of Car class
var car = new Car('KA 25 J 3728', 'Ford Fiesta');
// Starting the car
document.getElementById("start").innerHTML = car.start();
// Driving the car
document.getElementById("drive").innerHTML = car.drive(90);
// Getting the position of the car
var timeTravelled = 3;
var position = car.getPosition(timeTravelled);
// Displaying the position of the car
document.getElementById("position").innerHTML = "The car has travelled " + position + " kms in " + timeTravelled + " hrs.";
