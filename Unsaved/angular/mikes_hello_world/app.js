angular.module('app', []);
angular.module('app').controller('myCntl', function($interval) {
  console.log('Alive');
  var vm = this;
  vm.name = 'John';
  vm.age = 23;
  vm.logTheName = function() {
    alert('the name is: ' + vm.name);
  };
  vm.logTheAge = function() {
    alert('the age is: ' + vm.age);
  };
  $interval(function() { vm.age = vm.age + 1;}, 2000);
});
