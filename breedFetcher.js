fetchBreed = function(breed) {

  const fetch = require('node-fetch')
  fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
  .then(res => {
    if (res.ok) {
      return res.json() // turns in to object
    } else {
      console.log('error')
    } 
   })
  .then(data => console.log(data)) // prints data
}

module.exports = fetchBreed;