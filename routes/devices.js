const express = require('express');
const auth =  require('../middleware/auth');
const advancedResults = require('../middleware/advancedResult');
const CurrentDevice = require('../model/currentDevice');
const {getCurrentDevices,getSingleCurrentDevice, deleteSingleCurrentDevice,updateDataFromLogon, updateCurrentDevice, deleteEverything} = require('../controller/devices');

const router = express.Router();

router.route('/').get(advancedResults(CurrentDevice),auth,getCurrentDevices).post(auth,updateDataFromLogon).delete(auth,deleteEverything);
router.route('/:id').get(auth,getSingleCurrentDevice).delete(auth,deleteSingleCurrentDevice).put(auth,updateCurrentDevice);

module.exports = router;