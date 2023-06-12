const express = require('express');
const router = express.Router();

const {createUser, login, webRegister} = require('../controller/register');

router.route('/register').post(createUser);
router.route('/register/web').post(webRegister);
router.route('/login').post(login);

module.exports = router;