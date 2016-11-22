app.controller('mainCtrl', function($scope, $dataStorage) {
	$scope.showPromtAddUser = false;
	$scope.leftMenu = $dataStorage.getLeftMenu();
	$scope.peopleList = $dataStorage.getPeopleList();
	$scope.showPromtDeleteUser = false;
	$scope.activeUser = 0;

	$scope.getPeopleListArr = Object.keys($scope.peopleList);


	$scope.returnAmount = function(humanFriends){
		// console.log(humanFriends.length);
		return Object.keys(humanFriends).length;
	};

	$scope.createActiveUser = function(humanIndex){
		$scope.activeUser = {};
		$scope.activeUser = humanIndex;
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


// delete friend
	$scope.deleteFromFriends = function(friendKey){
		$scope.peopleList[$scope.activeUser].friends.splice($scope.peopleList[$scope.activeUser].friends.indexOf(+friendKey), 1);
	};

	$scope.isFriend = function(humanIndex){
		return $scope.peopleList[$scope.activeUser].friends.some(function(friend){
			  return friend == humanIndex;
		})
	};
	// $scope.isFriend = function(humanIndex){
	// 	return $scope.peopleList[$scope.activeUser].friends.indexOf(+humanIndex) !== -1;
	// };

});

