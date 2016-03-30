var marc = {
  firstName: 'Marc',
  lastName: 'Wright'
};

var shawn = {
  firstName: 'Shawn',
  lastName: 'Johnson'
}

var mike = {
  firstName: 'Mike',
  lastName: 'Hopper',
  canLegallyDrink: true,
  age: 29,
  'favorite movie': 'Star Wars',
  friends: [marc, shawn],
  bestFriend: shawn,
  favoriteHobbies: [
    'photography',
    'music',
    'cycling'
    ],
  fullName: function() {
    return this.firstName + ' ' + this.lastName + ' is ' + this.age + ' years old.';
  },
  birthday: function(person) {
    this.age = this.age + 1;
  }
};


console.log(JSON.stringify(mike));
console.log(mike.fullName());
console.log('You are ' + mike.age + ' years old');
// bithday(mike);
mike.birthday();
console.log('You are ' + mike.age + ' years old');
console.log('Your favorite movie is', mike['favorite movie']);


console.log(JSON.stringify(mike));
console.log(mike.fullName());
console.log('You are ' + mike.age + ' years old');
// bithday(mike);
mike.bithday();
console.log('You are ' + mike.age + ' years old');
console.log('Your favorite movie is', mike['favorite movie']);
