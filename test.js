const xlsx = require('xlsx');
const fs = require('fs');

const wb = xlsx.readFile('./_data/nelDevicesAge.xlsx', {dateaNF:'mm/dd/yyyy'});
// console.log(wb.SheetNames);

const ws = wb.Sheets["CurrentDevices"];
// console.log(ws);

const data = xlsx.utils.sheet_to_json(ws,{raw:false});
// console.log(data);

fs.writeFileSync('./_data/currentDevices.json', JSON.stringify(data, null, 2));