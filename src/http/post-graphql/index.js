let arc = require('@architect/functions')
let {ApolloServer, gql} = require('apollo-server-lambda')
let data = require('@begin/data')

let typeDefs = gql`
  type Query {
    hello: String,
    beer: [String],
  }
  type Mutation {
    addBeer(beer: String!): String!
  }
`

let resolvers = {
  Query: {
    hello: () => 'Hello world!',
    beer: async () => await data.get({ table: 'beer '}),
  },
  Mutation: {
    addBeer: async (_, { beer }) => {
      await data.set({ table: 'beer', key: 1, beer})
      return beer
    }
  }
}

let server = new ApolloServer({typeDefs, resolvers})
let handler = server.createHandler()

exports.handler = function(event, context, callback) {
  let body = arc.http.helpers.bodyParser(event)
  // Body is now parsed, re-encode to JSON for Apollo
  event.body = JSON.stringify(body)
  handler(event, context, callback)
}
