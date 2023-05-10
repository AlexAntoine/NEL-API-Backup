const express = require('express');
const {getAllDevices, getSingleDevice, deleteSingleDevices,updateDevice} = require('../controller/deviceAge');

const router = express.Router();

router.route('/').get(getAllDevices);
router.route('/:id').get(getSingleDevice).delete(deleteSingleDevices).put(updateDevice);

module.exports = router;