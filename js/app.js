// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var app = angular.module("app",[]);

app.controller("ProductController", function($scope,$http){
	$scope.results = [];
	$scope.allProducts = []
	$http.get('libs/getdata.php').success(function(data){
		$scope.allProducts = data;
		for(var i=1; i <=15; i++){
			$scope.results.push($scope.allProducts[i]);
		}

		window.all = $scope.allProducts;
		window.results = $scope.results;
	});

	$scope.more = function(){
		var last = $scope.results.length - 1;
		for(var i=1; i <= 15; i++){
			$scope.results.push($scope.allProducts(last+1));
		}
	}

	// $scope.more();
});


// function yHandler(id){
// 	var wrap = document.getElementById('wrap');
// 	var contentHeight = wrap.offsetHeight;
// 	var yOffset = window.pageYOffset;
// 	var y = yOffset + window.innerHeight;
// 	if(y >= contentHeight){
// 		// do all things you want here
// 	}
// }
// window.onscroll = yHandler();

app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];

        var funCheckBounds = function(evt) {
            console.log("event fired: " + evt.type);
            var rectObject = raw.getBoundingClientRect();
            if (rectObject.bottom === window.innerHeight) {
                scope.$apply(attr.whenScrolled);
            }

        };
        
        angular.element(window).bind('scroll load', funCheckBounds);
        
        
    };
});