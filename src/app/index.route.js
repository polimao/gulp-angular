(function() {
	'use strict';

	angular
		.module('gulpAugular')
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.state('testPhp', {
				url: '/test/php',
				templateUrl: 'app/test/php/index.html',
				controller: 'testPhpController',
				controllerAs: 'testPhp'
			});

		$urlRouterProvider.otherwise('/');
	}

})();
