const express = require('express');
const auth =  require('../middleware/auth');
const {getCurrentDevices,getSingleCurrentDevice, deleteSingleCurrentDevice,addNewDevice, updateCurrentDevice} = require('../controller/devices');

const router = express.Router();

router.route('/').get(getCurrentDevices).post(addNewDevice);
router.route('/:id').get(getSingleCurrentDevice).delete(deleteSingleCurrentDevice).put(updateCurrentDevice);

module.exports = router;