// JavaScript Document
function TodoCtrl($scope) {
	
					//list agenda events
				    $scope.todos = [
					{text:'Introduction to AngularJS Workshop', done:true},
					{text:'Application in 45 Mins', done:false},
					{text:'Google Analytics with Android', done:false}];
 
 
 					//add agenda event
					  $scope.addTodo = function() {
						$scope.todos.push({text:$scope.todoText, done:false});
						$scope.todoText = '';
					  };
 
 					//show remaining events
					  $scope.remaining = function() {
						var count = 0;
						angular.forEach($scope.todos, function(todo) {
						  count += todo.done ? 0 : 1;
						});
						return count;
					  };
 
 					//archive completed events
					  $scope.archive = function() {
						var oldTodos = $scope.todos;
						$scope.todos = [];
						angular.forEach(oldTodos, function(todo) {
						  if (!todo.done) $scope.todos.push(todo);
						});
					  };
}