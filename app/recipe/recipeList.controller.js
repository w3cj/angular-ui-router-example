(function () {
	'use strict';

	angular
		.module('recipeApp')
		.controller('RecipeListController', RecipeListController);

	function RecipeListController($http) {
		const vm = this;

		vm.searchRecipes = searchRecipes;

		vm.$onInit = function() {
			vm.recipes = [];
		}

		function searchRecipes() {
			const recipeURL = `http://galvanize-cors-proxy.herokuapp.com/http://www.recipepuppy.com/api/?q=${vm.search}`;

			$http
				.get(recipeURL)
				.then(result => {
					vm.recipes = result.data.results;
					console.log(vm.recipes);
				});
		}
	}

})();
