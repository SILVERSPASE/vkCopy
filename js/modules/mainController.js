app.controller('mainCtrl', function($scope, $dataStorage) {
	$scope.leftMenu = $dataStorage.getLeftMenu();
	$scope.peopleList = $dataStorage.getPeopleList();

	$scope.activeUser = 0;

	$scope.returnAmount = function(humanFriends){
		// console.log(humanFriends.length);
		return Object.keys(humanFriends).length;
	};

	$scope.createActiveUser = function(humanKey){
		// $scope.activeUser = {};
		$scope.activeUser = humanKey;
		console.log($scope.activeUser);
	}

	$scope.addToFriends = function(humanKey){
		console.log(humanKey, $scope.activeUser);
		if ($scope.peopleList[$scope.activeUser].friends.indexOf(humanKey) == -1 && $scope.activeUser != humanKey){
			$scope.peopleList[$scope.activeUser].friends.push(humanKey);
			console.log($scope.peopleList[$scope.activeUser]);
		} else {
			console.log('You already have this person in Friends');
		}
	};

		// $scope.isFriend = function(humanKey){
	// 	console.log($scope.peopleList[$scope.activeUser].friends);
	// 	for (var i = 0; i < $scope.peopleList[$scope.activeUser].friends.length; i++){
	// 			if($scope.peopleList[$scope.activeUser].friends.indexOf(humanKey)){
	// 				return true;
	// 		}
	// 	}
	// };
});


