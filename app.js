require('dotenv');
const colors = require('colors');
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet')
// const xss = require('xss-clean');
const hpp = require('hpp');
const path = require('path');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const {localDb,prodDb} = require('./db/devices');

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//Routes
const deviceRouter = require('./routes/devices.js');
const oldRouter = require('./routes/oldDevices');
const nelUsers = require('./routes/nelUsers');
const deviceAge = require('./routes/deviceAge');

app.use(express.json());

prodDb();

//Rate Limiting
const limiter = rateLimit({
    windowMs:10 * 60 * 1000, //10 minutes
    max:100
});

app.use(limiter);

//Sanitize Data
app.use(mongoSanitize());

//Set security headers
app.use(helmet());

//Prevent XSS attacksd
// app.use(xss());

//Prevent http param pollution
app.use(hpp());

//Enable CORS
app.use(cors());

app.use('/api/current',deviceRouter);
app.use('/api/old',oldRouter);
app.use('/api/deviceage', deviceAge);
app.use('/api/nelusers',nelUsers);


module.exports = app;