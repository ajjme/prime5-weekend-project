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
    self.optionValue = "people";
    self.searchValue = "luke";

    self.query = function(category, keywords) {
        const config = { params: { search: keywords } };
        console.log(category, keywords);
        if(category && keywords) {
            $http.get('https://swapi.co/api/' + category, config)
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