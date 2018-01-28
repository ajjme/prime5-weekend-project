const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


// Schema

const filmSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true},
    director: String
});
const personSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true},
    eye_color: String,
    birth_year: String
});
const planetSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true},
    climate: String,
    population: String
});
const speciesSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true},
    classification: String,
    language: String
});
const starshipSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true},
    model: String,
    starship_class: String,
    crew: String
});
const vehicleSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true},
    model: String,
    vehicle_class: String,
    crew: String
});

const Film = mongoose.model('Film', filmSchema);
const Person = mongoose.model('Person', personSchema);
const Planet = mongoose.model('Planet', planetSchema);
const Species = mongoose.model('Species', speciesSchema);
const Starship = mongoose.model('Starship', starshipSchema);
const Vehicle = mongoose.model('Vehicle', vehicleSchema);


// Routes
router.get('/:category', (req, res) => {
    console.log('req', req);

    const category = req.params.category;
    
    function callback(error, response) {
        if (error) {
            res.send(500);
        } else {
            res.send(response);
            console.log('response', response)
        }
    }

    // Decide which collection to get data from
    if (category === 'films') {
        Film.find({}, callback);
    } else if (category === 'people') {
        Person.find({}, callback);
    } else if (category === 'planets') {
        Planet.find({}, callback);
    } else if (category === 'species') {
        Species.find({}, callback);
    } else if (category === 'starships') {
        Starship.find({}, callback);
    } else if (category === 'vehicles') {
        Vehicle.find({}, callback);
    }
});

router.post('/', (req, res) => {

    // Decide what collection to put data in
    const category = req.body.mongoCategory;
    let data;
    if (category === 'films') {
        data = new Film(req.body);
    } else if (category === 'people') {
        data = new Person(req.body);
    } else if (category === 'planets') {
        data = new Planet(req.body);
    } else if (category === 'species') {
        data = new Species(req.body);
    } else if (category === 'starships') {
        data = new Starship(req.body);
    } else if (category === 'vehicles') {
        data = new Vehicle(req.body);
    }
    console.log(category, data, 'ehere')

    // Save it in the right collection
    data.save((error, response) => {
        if (error) {
            console.log('error', error);
            res.send(500);
        } else {
            console.log('response', response);
            res.send(response);
        }
    });
});

router.delete('/:category/:id', (req, res) => {
    console.log('hit delete route', req.params.id);
    // Person.findByIdAndRemove({'_id': req.params.id}, (error, response) => {
    // });
    const category = req.params.category;
    
    function callback(error, response) {
        if (error) {
            console.log('error', error);
            res.send(500);
        } else {
            console.log('response', response);
            res.send(200);
        }
    }

    if (category === 'films') {
        Film.findByIdAndRemove({'_id': req.params.id}, callback);
    } else if (category === 'people') {
        Person.findByIdAndRemove({'_id': req.params.id}, callback);
    } else if (category === 'planets') {
        Planet.findByIdAndRemove({'_id': req.params.id}, callback);
    } else if (category === 'species') {
        Species.findByIdAndRemove({'_id': req.params.id}, callback);
    } else if (category === 'starships') {
        Starship.findByIdAndRemove({'_id': req.params.id}, callback);
    } else if (category === 'vehicles') {
        Vehicle.findByIdAndRemove({'_id': req.params.id}, callback);
    }

})


module.exports = router;