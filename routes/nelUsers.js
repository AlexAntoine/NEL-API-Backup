const express = require('express');
const {getNelUsers, getSingleNelUser, deleteSingleNelUser,updateNelUsers, addNelUsers} = require('../controller/nelUsers');

const router = express.Router();

router.route('/').get(getNelUsers).post(addNelUsers);
router.route('/:id').get(getSingleNelUser).delete(deleteSingleNelUser).put(updateNelUsers);

module.exports = router;