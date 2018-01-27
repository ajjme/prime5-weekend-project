const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const searchRouter = require('./routes/search.route.js');

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/search', searchRouter);

const databaseUrl = 'mongodb://localhost:27017/prime5_weekend_project';
mongoose.connect(databaseUrl);
mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
});
mongoose.connection.on('error', () => {
    console.log('error connecting to mongo');
});

app.listen(PORT, () => {
    console.log('listening on', PORT);
});