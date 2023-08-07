const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/graphql-schema');
const dotenv = require('dotenv');
const routes = require('./routes/student-route');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGOOSE_URI);

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

//This route will be used as an endpoint to interact with Graphql, 
//All queries will go through this route. 
app
.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  )
.use(bodyParser.json())
.use(express.urlencoded({ extended: true }))
.use('/',routes); 

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 