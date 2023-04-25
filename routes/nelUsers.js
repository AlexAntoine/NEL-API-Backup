const express = require('express');
const {getNelUsers, getSingleNelUser, deleteSingleNelUser} = require('../controller/nelUsers');

const router = express.Router();

router.route('/').get(getNelUsers);
router.route('/:id').get(getSingleNelUser).delete(deleteSingleNelUser);

module.exports = router;