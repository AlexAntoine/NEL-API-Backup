const converter = require('json-2-csv');
const mongoose = require('mongoose');
const DeviceAge = require('./model/nelDevices');
const fs = require("fs");

mongoose.connect('mongodb+srv://admin:doras9070@nel-api-db.izyhkuf.mongodb.net/nel-api',{useNewUrlParser:true, useUnifiedTopology: true});

const getData = async()=>{

    const data = await DeviceAge.find();
//    const dataConverted =  JSON.stringify(data);
//    console.log(dataConverted);
    // console.log(data);

    return data;
}   
const convert = async()=>{
    const options = {
        // excludeKeys:["__v","_id.$oid","_doc.__v","_doc._id","_doc._id","","","","",""],
        keys:[
            "_doc.DeviceName"
            // "_doc.ShipDate"
        ],

    }

    // const data =[
    //     {
    //         "_id": {
    //             "$oid": "64595da5420a65920e5941aa"
    //           },
    //           DeviceName: "DESKTOP-C34CJTH",
    //           ShipDate: "12/24/13",
    //           __v: "0"
    //     },

    //     {
    //         name:"Alex",
    //         office:"boston"
    //     },

    //     {
    //         name:"Pamela",
    //         office:"boston"
    //     },

    //     {
    //         name:"Mike",
    //         office:"Nort Carolina"
    //     },

    //     {
    //         name:"John",
    //         office:"North Carolina"
    //     },

        
    // ]
    const data = await getData();
    const csv = await converter.json2csv(data, options);
    // console.log(csv);

    return csv;
    //  
}

const createCsvFile = async(req, res)=>{
    const csv = await convert();
    console.log('line 67: ', csv);
    fs.writeFile("test.csv",csv,function(err){
        if(err){
            console.log(err);
            throw err

        }

        console.log('File Saved');
    } )
};


createCsvFile();

