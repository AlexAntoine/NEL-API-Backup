const express = require('express');
const {getAllCurrentRecords, getSingleRecord, addNewRecord, deleteSingleRecord} = require('../controller/currentRecords');

const router = express.Router();

router.route('/').get(getAllCurrentRecords).post(addNewRecord);
router.route('/:id').get(getSingleRecord).delete(deleteSingleRecord)

module.exports = router;