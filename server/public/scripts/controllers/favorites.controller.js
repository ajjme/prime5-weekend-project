swApp.controller('FavoritesController', ['$http', function($http) {
    const self = this;
    
    self.favorites = [
        { display: 'Films', term: 'films', list: [] },
        { display: 'People', term: 'people', list: [] },
        { display: 'Planets', term: 'planets', list: [] },
        { display: 'Species', term: 'species', list: [] },
        { display: 'Starships', term: 'starships', list: [] },
        { display: 'Vehicles', term: 'vehicles', list: [] }
    ];

    self.favoritesList = { list: [] };
    
    self.getFavorites = function() {
        console.log('response');
        for (let i = 0; i < self.favorites.length; i++) {
            $http.get('/favorites/' + self.favorites[i].term)
            .then(function(response) {
                console.log(response);
                self.favorites[i].list = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    };
    self.getFavorites();

    self.unfavorite = function(term, item) {
        console.log(term, item);
        $http.delete(`/favorites/${term}/${item._id}`)
            .then(function(response) {
                console.log('delete success', response);
                self.getFavorites();
            })
            .catch(function(error) {
                console.log('delete error', error);
            });
    }
}]);