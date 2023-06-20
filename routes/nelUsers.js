const express = require('express');
const auth = require('../middleware/auth');
const {getNelUsers, getSingleNelUser, deleteSingleNelUser,updateNelUsers, addNelUsers} = require('../controller/nelUsers');

const router = express.Router();

router.route('/').get(auth, getNelUsers).post(auth,addNelUsers);
router.route('/:id').get(auth,getSingleNelUser).delete(auth,deleteSingleNelUser).put(auth,updateNelUsers);

module.exports = router;