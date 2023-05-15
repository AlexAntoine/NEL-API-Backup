const express = require('express');
const {getCurrentDevices,getSingleCurrentDevice, deleteSingleCurrentDevice, updateCurrentDevice} = require('../controller/devices');

const router = express.Router();

router.route('/').get(getCurrentDevices);
router.route('/:id').get(getSingleCurrentDevice).delete(deleteSingleCurrentDevice).put(updateCurrentDevice);

module.exports = router;