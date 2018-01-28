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
    self.query = function(category, keywords) {
        const config = { params: { search: keywords } };
        console.log(category, keywords);
        if(category) {
            $http.get('https://swapi.co/api/' + category, config)
            .then(response => {
                self.queryResponseType = category;
                self.queryResponse = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error);
            })
        }
    };

}]);