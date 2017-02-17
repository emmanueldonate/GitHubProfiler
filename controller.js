(function() {
  'use strict';

angular
.module('myApp')
.controller('GitHubCtrl', GitHubCtrl);

GitHubCtrl.$inject = ['$http'];


function GitHubCtrl($http) {
  var vm = this;
  var user = '';
  var data = [];

  activate();

  function activate() {
    vm.getUserInfo = function() {
console.log("getUserInfo")
     $http.get("http://api.github.com/users/" + vm.userName + "?access_token=1563efdd17dd6cc9c602bcd37d43e633e65aed7a")
       .then(function(response) {
         vm.user = response.data;
         console.log(vm.user);
         console.log(userName);
      })
       .catch(function() {
         alert("User could not be found! Try again.");
       })
    }
  }
}
})();
