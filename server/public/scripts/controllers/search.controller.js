swApp.controller('SearchController', ['$http', 'DataService', function($http, DataService) {
    const self = this;

    self.favorites = DataService.favorites;
    self.queryResponse = DataService.queryResponse;
    self.optionValue = "people";
    self.searchValue = "luke";
    
    // Sets default select option
    self.queryResponseType = DataService.queryResponseType;

    self.favorite = DataService.favorite;

    self.favorite = function(data, category) {
        data.mongoCategory = category;
        console.log('result', data);
        $http.post('/favorites', data)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    self.query = DataService.query;
    self.query();

}]);