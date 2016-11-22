app.service('$dataStorage', function () {
	var leftMenu = [
		{title: "my Friends", link: "myFriends"},
		{title: "All people", link: "allPeople"},
		{title: "my Messages", link: "allMessages"}
	]; 

	this.getLeftMenu = function() {
		return leftMenu;
	};

	var names = ["Art", "Donni", "Max", "Eva", "Nata", "Kate", "Lisa", "Anna", "John", "Andy", "Legolas", "Mark", "Hero", "Peter", "Tony", "Homer", "Steven", "Eragorn"]


	var peopleList = {
			0 :{name: "Art",      age:20, friends: [2,7,5]},
			1: {name: "Donni",    age:21, friends: []},
			2: {name: "Max",      age:21, friends: [1,7,5,0]},
			3: {name: "Eva",      age:22, friends: [7]},
			4: {name: "Nata",     age:23, friends: [1,7]},
			5: {name: "Kate",     age:30, friends: [1,7]},
			6: {name: "Lisa",     age:25, friends: [1,7]},
			7: {name: "Anna",     age:26, friends: [1,7]},
			8: {name: "John",     age:18, friends: [1,7]},
			9: {name: "Andy",     age:26, friends: [1,5,3]},
			10: {name: "Legolas", age:26, friends: [1,5,3]},
			11: {name: "Andy",    age:26, friends: [1,5,3]},
			12: {name: "Mark",    age:26, friends: [1,5,3]},
			13: {name: "Andy",    age:26, friends: [1,5,3]},
			14: {name: "Hero",    age:26, friends: [1,5,3]},
			15: {name: "Peter",   age:26, friends: [1,5,3]},
			16: {name: "Tony",    age:26, friends: [1,5,3]},
			17: {name: "Homer",   age:26, friends: [1,5,3]},
			18: {name: "Steven",  age:26, friends: [1,5,3]},
			19: {name: "Eragorn", age:26, friends: [1,5,3]}
	};
	
	this.getPeopleList = function() {
		return peopleList;
	};

	var allMessageHistory =  {
		"0:2": [
			{	sender: 0,
				message:" В нашей бухгалтерии снова не работает банк-клиент.",	
				date: "20.11.16"
			},
			{	sender: 2,
				message:"ХЗ как Вы его запускаете - но у меня все работает!",
				date: "21.11.16"
			},
			{	sender: 0,
				message:"Что значит хз?",	
				date: "20.11.16"
			},
			{	sender: 2,
				message:"Хочу знать",
				date: "21.11.16"
			},
			{	sender: 0,
				message:"Спасибо",	
				date: "20.11.16"
			},
						{	sender: 0,
				message:" В нашей бухгалтерии снова не работает банк-клиент.",	
				date: "20.11.16"
			},
			{	sender: 2,
				message:"ХЗ как Вы его запускаете - но у меня все работает!",
				date: "21.11.16"
			},
			{	sender: 0,
				message:"Что значит хз?",	
				date: "20.11.16"
			},
			{	sender: 2,
				message:"Хочу знать",
				date: "21.11.16"
			},
			{	sender: 0,
				message:"Спасибо",	
				date: "20.11.16"
			}
		],
		"0:7": [
			{	sender: 0,
				message:"seven",	
				date: "20.11.16"
			},
			{	sender: 7,
				message:"seven here",
				date: "21.11.16"
			}
		]
	};

	this.getallMessageHistory = function() {
		return allMessageHistory;
	};
});