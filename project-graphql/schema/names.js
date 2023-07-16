var { buildSchema } = require("graphql")


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    waheed: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!, this is neq query, more"
  },
  waheed: () => {
    return "Waheed Nazir"
  },
}
module.exports = {
    query: schema
}