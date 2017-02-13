var Todo = angular.module('Todo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/task')
		.success(function(data) {
			$scope.todos = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.createTodo = function() {
		$http.post('/api/task', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
			
	};

	// // delete a todo after checking it
	// $scope.deleteTodo = function(id) {
		// $http.delete('/api/delete/' + id)
			// .success(function(data) {
				// $scope.todos = data;
			// })
			// .error(function(data) {
				// console.log('Error: ' + data);
			// });
	// };

}
