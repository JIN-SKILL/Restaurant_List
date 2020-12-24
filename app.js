// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const restaurantlist = require('./restaurant.json')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// route setting
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantlist.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant_id = req.params.restaurant_id
  const restaurant = restaurantlist.results.find(item => item.id.toString() === restaurant_id)
  res.render('show', { restaurant : restaurant })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
