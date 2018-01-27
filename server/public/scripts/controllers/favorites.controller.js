swApp.controller('FavoritesController', ['$http', function($http) {
    const self = this;
    
    self.favoritesList = [];
    self.getFavorites = function() {
        $http.get('/favorites')
        .then(function(response) {
            console.log(response);
            self.favoritesList = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    };
    self.getFavorites();

    self.unfavorite = function(item) {
        console.log(item);
        $http.delete(`/favorites/${item._id}`)
            .then(function(response) {
                console.log('response', response);
                self.favoritesList = response.data;
                self.favoritesList = [];
            })
            .catch(function(error) {
                console.log('error', error);
            });
    }
}]);