const express = require('express');
const auth =  require('../middleware/auth');
const {getAllDevices, getSingleDevice, deleteSingleDevices,updateDevice, addDeviceAge} = require('../controller/deviceAge');

const router = express.Router();

router.route('/').get(auth,getAllDevices).post(auth,addDeviceAge);
router.route('/:id').get(getSingleDevice).delete(deleteSingleDevices).put(updateDevice);

module.exports = router;