const express = require('express');
const router = express.Router();

const {createUser, login, webRegister, webLogin} = require('../controller/register');

router.route('/register').post(createUser);
router.route('/web/login').post(webLogin);
router.route('/web/register').post(webRegister);
router.route('/login').post(login);

module.exports = router;