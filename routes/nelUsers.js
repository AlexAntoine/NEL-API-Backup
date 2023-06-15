const express = require('express');
const auth = require('../middleware/auth');
const {getNelUsers, getSingleNelUser, deleteSingleNelUser,updateNelUsers, addNelUsers} = require('../controller/nelUsers');

const router = express.Router();

router.route('/').get(auth, getNelUsers).post(addNelUsers);
router.route('/:id').get(getSingleNelUser).delete(deleteSingleNelUser).put(updateNelUsers);

module.exports = router;