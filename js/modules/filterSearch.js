app.filter('customFilter', function($dataStorage) {
    return function(input, search) {
      if (!input) return input;
      if (!search) return input;
      var expected = ('' + search).toLowerCase();
      var result = [];
      angular.forEach(input, function(value, key) {
        var peopleList = $dataStorage.getPeopleList();
        var actualName = ('' + peopleList[value].name).toLowerCase();
        if (actualName.indexOf(expected) !== -1) {
            result.push(value);
        }
      });
    return result;
  }
});