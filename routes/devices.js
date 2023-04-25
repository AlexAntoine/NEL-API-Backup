const express = require('express');
const {getCurrentDevices,getSingleCurrentDevice, deleteSingleCurrentDevice} = require('../controller/devices');

const router = express.Router();

router.route('/').get(getCurrentDevices);
router.route('/:id').get(getSingleCurrentDevice).delete(deleteSingleCurrentDevice);

module.exports = router;