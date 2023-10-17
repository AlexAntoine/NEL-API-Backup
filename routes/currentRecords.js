const express = require('express');
const {getAllCurrentRecords, getSingleRecord, addNewRecord, deleteAllCurrentRecords, deleteSingleRecord} = require('../controller/currentRecords');
const CurrentRecords = require('../model/currentRecords');

const advancedResult = require('../middleware/advancedResult');

const router = express.Router();

router.route('/').get(advancedResult(CurrentRecords),getAllCurrentRecords).post(addNewRecord).delete(deleteAllCurrentRecords);
router.route('/:id').get(getSingleRecord).delete(deleteSingleRecord)

module.exports = router;