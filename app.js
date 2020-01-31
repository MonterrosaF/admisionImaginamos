const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { order } = require('./src/routes/routes')
const app = express();

app.use(bodyParser.json())
app.use(morgan('dev'))

app.set('port', process.env.PORT || 3000)

//ROUTES
app.get('/order', order.get)
app.post('/order', order.post)
app.put('/order', order.put)
app.delete('/order', order.delete)

app.listen(app.get('port'), () =>  console.log('server on'));