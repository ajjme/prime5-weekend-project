const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true}
})
const Person = mongoose.model('Person', personSchema);

router.get('/', (req, res) => {
    console.log('req', req);
    Person.find({}, (error, response) => {
        if (error) {
            res.send(500);
        } else {
            res.send(response);
        }
    })
});

router.post('/', (req, res) => {
    const data = new Person(req.body);
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

module.exports = router;