'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;
        var s="http://localhost:8080/api/phone-detail/"+$routeParams.phoneId
        $http.get(s).then(function(response) {
          self.phone = response.data;
          self.setImage(self.phone.images[0].src);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
