angular.module('petsApp', []);

angular.module('petsApp')
.controller('petsCtrl', function() {
  this.pets = [
    { name : 'Meisha', species : 'dog', owner : 'Mike', vaccinated : true },
    { name : 'Diesel', species : 'dog', owner : 'Marc' },
    { name : 'Snoopy', species : 'dog', owner : 'Charlie' },
    { name : 'Felix',  species : 'cat', owner : 'Susan' }
  ];

  this.removeLastPet = function() {
    this.pets.pop();
  };
});
