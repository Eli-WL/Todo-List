const express = require('express')
const mongoose = require('mongoose')

const exphbs = require('express-handlebars');

const bodyParser = require('body-Parser')

const methodOverride = require('method-override') // 載入 method-override

const Todo = require('./models/todo') // 載入 Todo model

const routes = require('./routes') // 引用路由器
const app = express()

// mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://localhost/todo-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// app.get('/', (req, res) => {
//   // res.send('hello world!')
//   res.render('index')
// })

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method')) // 將 request 導入路由器

app.use(routes)

app.listen(3000, () => {
  console.log('App is running on port 3000')
})