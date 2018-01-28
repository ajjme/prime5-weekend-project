swApp.controller('FavoritesController', ['$http', 'DataService', function($http, DataService) {
    const self = this;
    
    self.favorites = DataService.favorites;
    self.getFavorites = DataService.getFavorites;

    self.getFavorites();

    self.unfavorite = DataService.unfavorite;
    
}]);