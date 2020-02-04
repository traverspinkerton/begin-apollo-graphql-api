// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

const beers = [
  { name: 'Pilz', brewery: 'Live Oak', type: 'pilsner' },
  { name: 'Two Hearted Ale', brewery: 'Bells Brewery', type: 'IPA' }
]

// HTTP function
exports.handler = async function http(req) {
  console.log(req)
  return { body: JSON.stringify(beers) }
}
