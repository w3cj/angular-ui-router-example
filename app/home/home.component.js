(function () {
	'use strict';

	angular
		.module('recipeApp')
		.component('home', {
			template: `
				<a class="btn btn-default" ui-sref="recipeList">Recipe List</a>
			`
		});

})();
