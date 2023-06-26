const express= require('express');
const dotenv = require('dotenv');
const routes = require('./routes/router.js');
const mongodb= require('./db/connectDb.js')
dotenv.config();
const app= express();
const PORT=process.env.PORT;

app.use('/', routes);

mongodb.initDatabase((err)=>{
    if(err){
        console.log('database connection failed');
    }
    else{
        app.listen(PORT, ()=>{
            console.log('database connectted & server started on port '+ PORT);
        });
    }
});

