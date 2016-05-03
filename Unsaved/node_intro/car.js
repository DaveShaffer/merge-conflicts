function Vehicle(make, model, color, convertable) {
  this.make = make
  this.model = model
  this.color = color
  this.convertable = convertable
  this.speed = 0;
}

Vehicle.prototype.acl = function(amount) {
  this.speed += amount;
}
Vehicle.prototype.dcl = function(amount) {
  this.speed -= amount;
}
Vehicle.prototype.toString = function () {
  return `${this.make} ${this.model} is a ${this.color} ${this.convertable ? `convertable` : `sedan`} travelling at ${this.speed} mph`;
}
module.exports = Vehicle;
