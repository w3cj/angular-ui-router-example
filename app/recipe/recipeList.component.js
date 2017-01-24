(function () {
	'use strict';

	angular
		.module('recipeApp')
		.component('recipeList', {
			controller: 'RecipeListController',
			templateUrl: 'app/recipe/recipeList.html'
		});

})();
