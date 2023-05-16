const express = require('express');
const {getNelUsers, getSingleNelUser, deleteSingleNelUser,updateNelUsers} = require('../controller/nelUsers');

const router = express.Router();

router.route('/').get(getNelUsers);
router.route('/:id').get(getSingleNelUser).delete(deleteSingleNelUser).put(updateNelUsers);

module.exports = router;