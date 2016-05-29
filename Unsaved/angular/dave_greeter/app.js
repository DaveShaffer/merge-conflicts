angular.module('myApp', []);
angular.module('myApp')
  .service('greeterSvc', function() {
  var svc = this;
  svc.salutation = 'Hello ';
  svc.greeting = function(name) {
    return svc.salutation + name + '!';
  };
})
.factory('spanishGreeterSvc', function() {
  return {
    greeting: function(name) { return 'Hola ' + name + '!'; }
  };
})
  .controller('greeterCtrl', function(greeterSvc, spanishGreeterSvc, $log) {
  $log.info('greeter.Ctrl is alive');
  $log.warn('this is a warning');
  $log.error('this is an err');
  var vm = this;
  var message1 = greeterSvc.greeting('dave');
  var message2 = spanishGreeterSvc.greeting('shawn');
  greeterSvc.salutation = "what's up, ";
  var message3 = greeterSvc.greeting('Marc');
  vm.messages = [message1, message2, message3];
});
