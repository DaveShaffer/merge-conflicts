var person = {};

person.firstName = 'Mike';
person.lastName = 'Hopper';
person.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

console.log(person);

person.firstName = 'Michael';
person.age = 29;
