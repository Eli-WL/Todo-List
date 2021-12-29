const mongoose = require('mongoose')
// config/mongoose.js
// 如果在 Heroku 環境則使用 process.env.MONGODB_URI
// 否則為本地環境，使用 mongodb://localhost/todo-list
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/todo-list'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb://localhost/todo-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db