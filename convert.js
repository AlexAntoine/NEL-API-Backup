// Turn xlsx files into json 
const xlsx = require('xlsx');
const fs = require('fs');

const currentRecords = './_data/CurrentRecords.xlsx';
const nelDevicesAge = './_data/nelDevicesAge.xlsx';
const updatedDevices  = './_data/updated_devices.xlsx';

const wb = xlsx.readFile(updatedDevices, {dateaNF:'mm/dd/yyyy'});
console.log(wb.SheetNames);

const ws = wb.Sheets["CurrentDevices"];
// console.log(ws);

const data = xlsx.utils.sheet_to_json(ws,{raw:false});
// console.log(data);

fs.writeFileSync('./_data/json/currentDevices.json', JSON.stringify(data, null, 2));