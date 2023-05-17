const express = require('express');
const {getOldDevices,getSingleOldDevice, deleteSingleDevice, updateOldDevice, addOldDevice} = require('../controller/oldDevices')

const router = express.Router();

router.route('/').get(getOldDevices).post(addOldDevice);
router.route('/:id').get(getSingleOldDevice).delete(deleteSingleDevice).put(updateOldDevice);

module.exports = router;
