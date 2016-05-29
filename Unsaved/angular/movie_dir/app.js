angular.module('APP', []);
angular.module('APP')
  .service('movieSvc', function() {
  var svc = this;
  svc.airplane = 'Airplane!';
  svc.movie = function(dir) {
    return svc.airplane + dir +'!';
  };
})
  .controller('CTRL', function(movieSvc) {
  var vm = this;
  var dir1 = movieSvc.movie('Stan');
  var dir2 = movieSvc.movie('Roman');
  vm.dirs = [dir1, dir2];
  vm.newDir = function() {
    alert('the name is: ' + vm.dir);
    vm.dirs.push(vm.dir);
  };
});
