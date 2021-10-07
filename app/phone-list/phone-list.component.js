'use strict';

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('http://localhost:8080/api/phone').then(function(response) {
        self.phones = response.data;
      });
    }]
  });

