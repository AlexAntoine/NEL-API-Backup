const express = require('express');
const {getOldDevices,getSingleOldDevice, deleteSingleDevice, updateOldDevice} = require('../controller/oldDevices')

const router = express.Router();

router.route('/').get(getOldDevices);
router.route('/:id').get(getSingleOldDevice).delete(deleteSingleDevice).put(updateOldDevice);

module.exports = router;
