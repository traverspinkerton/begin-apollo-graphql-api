let data = require('@begin/data')
let arc = require('@architect/functions')

exports.handler = async function(req) {
  try {
    const { beer } = arc.http.helpers.bodyParser(req)
    data.set({ table: 'beer', key: beer.length * Math.random(), beer})
    return { body: JSON.stringify(beer) }
  } catch (error) {
    console.error(error)

    return { statusCode: 500 }
  }
}