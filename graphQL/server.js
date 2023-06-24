const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');


const app = express();

//This route will be used as an endpoint to interact with Graphql, 
//All queries will go through this route. 
app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  )

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 