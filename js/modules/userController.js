app.controller('userCtrl', function($scope, $dataStorage, $timeout) {
	$scope.allMessageHistory = $dataStorage.getallMessageHistory();
	$scope.showPromtDeleteUser = false;
	$scope.receiver = 3;  //friend who is getting message




// send a message
	$scope.sendMessage = function(textMessage){
		$scope.getHistoryKey = $scope.activeUser < $scope.receiver ? $scope.activeUser + ':' + $scope.receiver : $scope.receiver + ':' + $scope.activeUser;
		$scope.allMessageHistory[$scope.getHistoryKey] //перенос строки, ";" не ставить)
			.push(
				{	sender: $scope.activeUser,
					message: textMessage,	
					date: new Date()
				}
			);
		this.textMessage = '';
		console.log($scope.allMessageHistory);
	};

	// scroll to new message after finis rendering
	$scope.onEnd = function(){
        $timeout(function(){
            document.getElementById('messageBoxInner').scrollTop = 9999;
        }, 1);
    };

	$scope.createReceiver = function(friendValue){
		$scope.receiver = friendValue;
	}

	$scope.getMessageHistory = function(){
		$scope.historyKey = $scope.activeUser < $scope.receiver ? $scope.activeUser + ':' + $scope.receiver : $scope.receiver + ':' + $scope.activeUser;
		$scope.messageHistory = $scope.allMessageHistory[$scope.historyKey];
	}

});

