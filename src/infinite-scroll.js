// Usage:
// <div infinite-scroll="addItems()" threshold="100"></div>

(function() {
	'use strict';
	
	angular
		.module('appName')
		.directive('infiniteScroll', infiniteScroll);
		
	infiniteScroll.$inject = ['$window'];
	
	function($window) {
		return {
			link: function(scope, element, attrs) {
				var offset = parseInt(attrs.threshold) || 0;
				var elem = element[0];
				
				element.bind('scroll', function() {
					if(elem.scrollTop + elem.offsetHeight >= elem.scrollHeight - offset) {
						scope.$apply(attrs.infiniteScroll);
					}
				});
			}
		};
	}
}());