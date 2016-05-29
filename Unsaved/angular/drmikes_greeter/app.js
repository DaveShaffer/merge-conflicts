angular.module('myApp', []);
angular.module('myApp')
.service('greeterSvc', function() {
  var svc = this;
  svc.greeting = function(name) { return 'Hello, ' + name + '!'; };
})
.factory('spanishGreeterSvc', function() {
  return {
    greeting: function(name) { return 'Hola, ' + name + '!'; }
  };
})
.controller('greeterCtrl', function(greeterSvc, spanishGreeterSvc) {
  var vm = this;
  var message1 = greeterSvc.greeting('Mike');
  var message2 = spanishGreeterSvc.greeting('Shawn');
  vm.messages = [message1, message2];
});
