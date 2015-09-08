(function() {
	'use strict';

	angular
		.module('gulpAugular')
		.factory('phpTestService', phpTestService);

	/** @ngInject */
	function phpTestService($log, $http) {
		var apiHost = 'http://php.com';

		var service = {
			apiHost: apiHost,
			index: index
		};

		return service;

		function index(page,limit) {
			if (!limit) {
				limit = 30;
			}

			return $http.get(apiHost + '/test/php/index?page=' + page + '\&limit=' + limit)
				.then(function(response){
					return response.data;
				})
				.catch(function (error) {
					$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
				});
		}
	}
})();
