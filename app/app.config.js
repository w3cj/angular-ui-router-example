(function () {
	'use strict';

	angular
		.module('recipeApp')
		.config(config);

	function config($stateProvider, $urlRouterProvider) {
		console.log('Hello from angular!');

		$stateProvider
			.state({
				name: 'home',
				url: '/',
				component: 'home'
			}).state({
				name: 'recipeList',
				url: '/recipe-list',
				component: 'recipeList'
			});

		$urlRouterProvider.otherwise('/');
	}

})();
