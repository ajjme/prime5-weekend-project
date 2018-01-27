swApp.controller('FavoritesController', ['$http', function($http) {
    const self = this;
    
    self.favoritesList = [];
    $http.get('/favorites')
        .then(function(response) {
            console.log(response);
            self.favoritesList = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
}]);