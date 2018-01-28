swApp.service('DataService', ['$http', function($http) {
    const self = this;

    self.favorites = [
        { display: 'Films', term: 'films', list: [] },
        { display: 'People', term: 'people', list: [] },
        { display: 'Planets', term: 'planets', list: [] },
        { display: 'Species', term: 'species', list: [] },
        { display: 'Starships', term: 'starships', list: [] },
        { display: 'Vehicles', term: 'vehicles', list: [] }
    ];


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

    self.queryResponse = { list: [], type: 'people' };
    self.query = function(category, keywords) {
        const config = { params: { search: keywords } };
        console.log(category, keywords);
        if(category) {
            $http.get('https://swapi.co/api/' + category, config)
            .then(response => {
                self.queryResponse.type = category;
                console.log('starships', self.queryResponse.type);
                self.queryResponse.list = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
        }
    };


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