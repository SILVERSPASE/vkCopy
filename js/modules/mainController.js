app.controller('mainCtrl', function($scope, $dataStorage) {
	$scope.leftMenu = $dataStorage.getLeftMenu();
	$scope.peopleList = $dataStorage.getPeopleList();
	// $scope.friendsList = $dataStorage.getFriendsList();

	$scope.activeUser = $scope.peopleList[0];

	$scope.returnAmount = function(humanFriends){
		return Object.keys(humanFriends).length;
	};

	$scope.createActiveUser = function(humanKey){
		$scope.activeUser = {};
		$scope.activeUser[humanKey] = $scope.peopleList[humanKey];
	}

	$scope.addToFriends = function(humanKey){
		if($scope.activeUser.friends.indexOf(indexOfhuman) == -1 && $scope.activeUser.key != indexOfhuman){
			$scope.peopleList[$scope.activeUser.key].friends.push(indexOfhuman);
		} else {
			console.log('You already have this person in Friends');
		}
	};
});
