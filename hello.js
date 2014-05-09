// JavaScript Document
function Hello($scope, $http) {
   
      $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=false&key=AIzaSyB0J5H1SH_nMPYLQbklBP_CSc2_YznUWt8').
        success(function(data) {
            $scope.greeting = data;
        });
   
   
   /*$http.get('.wss/hello.php').
        success(function(data) {
            $scope.greeting = data;
        }); */
		
		
		
		/*
		 $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        }); */
		
}