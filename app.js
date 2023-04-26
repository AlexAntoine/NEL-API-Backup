require('dotenv');
const colors = require('colors');
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helment');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const {localDb,prodDb} = require('./db/devices');

const app = express();

//Routes
const deviceRouter = require('./routes/devices.js');
const oldRouter = require('./routes/oldDevices');
const nelUsers = require('./routes/nelUsers');
const deviceAge = require('./routes/deviceAge');

app.use(express.json());

prodDb();

//Sanitize Data
app.use(mongoSanitize());

//Set security headers
app.use(helemt());

//Prevent XSS attacksd
app.use(xss());

//Prevent http param pollution
app.use(hpp());

//Enable CORS
app.use(cors());

app.use('/api/current',deviceRouter);
app.use('/api/old',oldRouter);
app.use('/api/deviceage', deviceAge);
app.use('/api/nelusers',nelUsers);


module.exports = app;