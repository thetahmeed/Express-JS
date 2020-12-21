





const express = require('express')
const morgan = require('morgan')
const contactsRoute = require('./contactsRoutes')

const app = express()
app.use(morgan('dev'))

// getting ready to except users data // thay atr middlewares // and data will be on 'req.body'
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', contactsRoute)

app.get('*', (req, res) => {
    res.send('404! Data not found')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`I am on PORT: ${PORT}`)
})