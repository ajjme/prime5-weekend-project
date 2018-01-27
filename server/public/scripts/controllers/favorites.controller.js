swApp.controller('FavoritesController', ['$http', function($http) {
    const self = this;
    
    self.favoritesList = { list: [] };
    console.log(self.favoritesList);
    self.getFavorites = function() {
        $http.get('/favorites')
        .then(function(response) {
            console.log(response);
            self.favoritesList = { list: response.data };
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
                console.log('delete success', response);
                self.getFavorites();
            })
            .catch(function(error) {
                console.log('delete error', error);
            });
    }
}]);