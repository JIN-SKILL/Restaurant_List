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
  res.render('index')
})

app.get('/show', (req, res) => {
  res.render('show')
})

app.get('/test', (req, res) => {
  console.log(restaurantlist)
  res.render('index')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
