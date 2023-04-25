const app = require('./app.js');

const port = process.env.PORT || 6000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`.yellow.bold)
})