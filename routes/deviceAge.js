const express = require('express');
const {getAllDevices, getSingleDevice, deleteSingleDevices,updateDevice, addDeviceAge} = require('../controller/deviceAge');

const router = express.Router();

router.route('/').get(getAllDevices).post(addDeviceAge);
router.route('/:id').get(getSingleDevice).delete(deleteSingleDevices).put(updateDevice);

module.exports = router;