const express = require('express');
const router = express.Router();

const {createUser, login} = require('../controller/register');

router.route('/register').post(createUser);
router.route('/login').post(login);

module.exports = router;