(function () {
	'use strict';

	angular
		.module('recipeApp')
		.component('recipe', {
			controller: function() {
				console.log('Hello from the recipe controller!');
			},
			bindings: {
        data: '='
      },
			template: `
				<div class="row">
					<div class="col-sm-2">
						<img class="img-responsive" src="{{$ctrl.data.thumbnail}}">
					</div>
					<div class="col-sm-10">
						<h3>{{$ctrl.data.title}}</h3>
						<p>{{$ctrl.data.ingredients}}</p>
					</div>
				</div>

			`
		});

})();
