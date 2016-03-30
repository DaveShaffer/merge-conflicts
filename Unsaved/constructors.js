function dog(name, type, age) {
  this.name = name;
  this.age = age;
  this.type = type;
}
dog.prototype.species = 'Dog';
dog.prototype.birthday = function() {
    this.age += 1;
};
dog.prototype.toString = function() {
  return this.name + ' is a ' + this.age + ' year old ' + this.type + ' ' + this.species;
}

var diesel = new dog('Diesel', 'Terrier', 1);
console.log(diesel.toString());
diesel.birthday();
console.log(diesel.toString());

var meisha = new dog('Meisha', 'Husky', 2);
console.log(meisha.toString());
meisha.birthday = function() {
  console.log('Horayy for Meisha!')
  this.age += 1;
}
meisha.birthday();
console.log(meisha.toString());
