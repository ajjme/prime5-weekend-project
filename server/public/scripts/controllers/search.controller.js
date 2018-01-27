swApp.controller('SearchController', ['$http', function($http) {
    const self = this;

    self.options = [
        { display: 'Films', term: 'films' },
        { display: 'People', term: 'people' },
        { display: 'Planets', term: 'planets' },
        { display: 'Species', term: 'species' },
        { display: 'Starships', term: 'starships' },
        { display: 'Vehicles', term: 'vehicles' }
    ];
    self.queryResponse = {};

    self.query = function(name) {
        if(name) {
            $http.get('https://swapi.co/api/' + name)
            .then(response => {
                self.queryResponse = response.data;
                console.log('response', self.queryResponse);
            })
            .catch(error => {
                console.log('error', error);
            })
        }
    };
    self.query();

}]);