require('dotenv');
const colors = require('colors');
const express = require('express');
const {localDb,prodDb} = require('./db/devices');

const app = express();

//Routes
const deviceRouter = require('./routes/devices.js');
const oldRouter = require('./routes/oldDevices');
const nelUsers = require('./routes/nelUsers');
const deviceAge = require('./routes/deviceAge');

app.use(express.json());

prodDb();

app.use('/api/current',deviceRouter);
app.use('/api/old',oldRouter);
app.use('/api/deviceage', deviceAge);
app.use('/api/nelusers',nelUsers);


module.exports = app;