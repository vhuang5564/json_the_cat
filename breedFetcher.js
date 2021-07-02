const fetch = require('node-fetch')

const breed = process.argv.slice(2)

fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
  .then(res => {
    if (res.ok) {
      return res.json() // turns in to object
    } else {
      console.log('error')
    } 
   })
  .then(data => console.log(data)) // prints data

  