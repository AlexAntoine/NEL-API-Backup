const fs  = require('fs');

const read = ()=>{

    return JSON.parse(
        fs.readFileSync('./_data/currentRecords.json').toString()
    )


}

const transformData = async()=>{
    
   const originalData = await read();

    const transformedData = {};

    originalData.forEach(entry =>{
        const username = entry.UserName;
        const deviceName = entry.DeviceName;
        const loginCount = entry.LoginCount;
        const date = entry.Date;

        if(transformedData[username]){

            transformedData[username].push({
                "DeviceName":deviceName,
                "LoginCount":loginCount,
                "Date":date
            })
        }else{
        
            transformedData[username] = [{
                "DeviceName":deviceName,
                "LoginCount":loginCount,
                "Date":date
            }]
        }
    });

    const result = Object.keys(transformedData).map(username => {
        return {
            [username]: transformedData[username]
        };
    });

    console.log(result);


    fs.writeFileSync('./_data/currentRecordsTest.json', JSON.stringify(result, null, 2));
    // console.log(result[1])

}

transformData()