const express = require('express');
const auth =  require('../middleware/auth');
const {getOldDevices,getSingleOldDevice, deleteSingleDevice, updateOldDevice, addOldDevice} = require('../controller/oldDevices')

const router = express.Router();

router.route('/').get(auth,getOldDevices).post(addOldDevice);
router.route('/:id').get(getSingleOldDevice).delete(deleteSingleDevice).put(updateOldDevice);

module.exports = router;
