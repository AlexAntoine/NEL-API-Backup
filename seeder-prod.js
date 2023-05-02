require('dotenv').config({path:'.env'});
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');

//Models
// const Reviews = require('./models/Reviews');
// const Bootcamp = require('./models/Bootcamp');
// const Course = require('./models/Courses'); 
const NelUsers = require('./model/nelUsers');


mongoose.connect(process.env.PRODUCTION, {useNewUrlParser:true, useUnifiedTopology: true})

//READ JSON Files
// const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));
// const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8'));
// const users= JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'));
// const reviews = JSON.parse(fs.readFileSync(`${__dirname}/_data/reviews.json`, 'utf-8'));


// Delete NEL Users
const deleteNelUsers = async()=>{
    try{
        await NelUsers.deleteMany();
        process.exit(1);

    }catch(error){

        console.log(error);
        process.exit(1)
    }
}
// Import into DB

// const importData = async()=>{

//     try {
//         await Bootcamp.create(bootcamps);
//         await Course.create(courses);
//         await User.create(users);
//         await Reviews.create(reviews)

//         console.log('Data imported...'.green.inverse)

//         process.exit(1);
//     } catch (error) {

//         console.log(error);
//         process.exit(1);
//     }
// }

// //Delete Data

// const deleteData = async()=>{

//     try {
//         await Bootcamp.deleteMany();
//         await Course.deleteMany();
//         await User.deleteMany();
//         await Reviews.deleteMany();

//         console.log('Data destroyed...'.red.inverse)

//         process.exit(1);
//     } catch (error) {

//         console.log(error);
//     }
// }

switch(process.argv[2]){

    // case '-i':
    //     importData();
    // break

    // case '-d':
    //     deleteData();
    //     break;

    case '-dnel':
        deleteNelUsers();
        break;
}
