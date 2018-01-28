swApp.controller('SearchController', ['$http', 'DataService', function($http, DataService) {
    const self = this;

    self.favorites = DataService.favorites;
    self.queryResponse = DataService.queryResponse;
    self.optionValue = "people";
    self.searchValue = "luke";
    

    self.favorite = DataService.favorite;
    self.query = DataService.query;
    self.query();

}]);