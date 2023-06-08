const express = require('express');
const router = express.Router();

const {login} = require('../controller/register');

router.route('/').post(login);
module.exports = router;