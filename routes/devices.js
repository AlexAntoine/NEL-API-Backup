const express = require('express');
const auth =  require('../middleware/auth');
const {getCurrentDevices,getSingleCurrentDevice, deleteSingleCurrentDevice,addNewDevice, updateCurrentDevice} = require('../controller/devices');

const router = express.Router();

router.route('/').get(auth,getCurrentDevices).post(auth,addNewDevice);
router.route('/:id').get(auth,getSingleCurrentDevice).delete(auth,deleteSingleCurrentDevice).put(auth,updateCurrentDevice);

module.exports = router;