const express = require('express');
const {getAllDevices, getSingleDevice, deleteSingleDevices} = require('../controller/deviceAge');

const router = express.Router();

router.route('/').get(getAllDevices);
router.route('/:id').get(getSingleDevice).delete(deleteSingleDevices)

module.exports = router;