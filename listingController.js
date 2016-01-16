angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newItem = undefined;
    $scope.showAdd = false;   // show add Form if true
    $scope.showInfo = false;  // show details if true

    $scope.addListing = function() {
      // button to show the add form
      if(!$scope.showAdd){
        $scope.showAdd = true;
      }
      // save the added listing
      else{
      $scope.listings.push($scope.newItem);
      $scope.showAdd = false;
      $scope.newItem = {code: '', 
                        name: '', 
                        address: ''};
      }
    };

    $scope.deleteListing = function(listing) {
      $scope.listings.splice($scope.listings.indexOf(listing), 1);
      $scope.showInfo = false;
    };

    $scope.showDetails = function(listing) {
      $scope.showInfo = true;
      $scope.detailedInfo = $scope.listings[$scope.listings.indexOf(listing)];
    };

    $scope.cancel = function() {
      $scope.showAdd = false;
      $scope.newItem = {code: '',
                        name: '',
                        address: ''};
    };
  }
]);