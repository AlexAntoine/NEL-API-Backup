const express = require('express');
const {getOldDevices,getSingleOldDevice, deleteSingleDevice} = require('../controller/oldDevices')

const router = express.Router();

router.route('/').get(getOldDevices);
router.route('/:id').get(getSingleOldDevice).delete(deleteSingleDevice);

module.exports = router;
