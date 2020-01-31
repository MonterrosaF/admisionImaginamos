const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { order, user, driver } = require('./src/routes/routes')
const app = express();

app.use(bodyParser.json())
app.use(morgan('dev'))

app.set('port', process.env.PORT || 3000)

//ROUTES
// ORDER
app.get('/order', order.get)
app.post('/order', order.post)
app.put('/order', order.put)
app.delete('/order', order.delete)
// USER
app.get('/user', user.get)
app.post('/user', user.post)
app.put('/user', user.put)
app.delete('/user', user.delete)
// DRIVER
app.get('/driver', driver.get)
app.listen(app.get('port'), () =>  console.log('server on in port: ' + 'port', process.env.PORT || 3000));