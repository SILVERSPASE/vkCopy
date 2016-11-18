app.service('$dataStorage', function () {
	var leftMenu = [
		{title: "my Page", link: ""},
		{title: "my Friends", link: "myFriends"},
		{title: "All people", link: "allPeople"},
		// {title: "my Photos", link: "myphotos"},	
		{title: "my Messages", link: "myMessages"}
	];

	this.getLeftMenu = function() {
		return leftMenu;
	};

	var peopleList = {
			1 :{name: "Art",   age:20, friends: [1,7]},
			2: {name: "Donni", age:21, friends: []},
			3: {name: "Max",   age:21, friends: [0,7,3]},
			4: {name: "Eva",   age:22, friends: [7]},
			5: {name: "Nata",  age:23, friends: [1,7]},
			6: {name: "Kate",  age:30, friends: [0,7]},
			7: {name: "Lisa",  age:25, friends: [1,7]},
			8: {name: "Anna",  age:26, friends: [1,7]},
			9: {name: "John",  age:18, friends: [1,7]},
			10:{name: "Andy",  age:26, friends: [1,5,3]}
	};
	
	this.getPeopleList = function() {
		return peopleList;
	};
});