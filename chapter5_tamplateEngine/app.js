





const mExpress = require('express')
const mMorgan = require('morgan')

const mApp = mExpress()

mApp.use(mMorgan('dev'))
mApp.use(mExpress.urlencoded({extended : true}))
mApp.use(mExpress.json())

// changing DEFAULT tamplate engine to EJS
mApp.set('view engine', 'ejs')

mApp.get('/', (req, res) => {
    res.render('index')
})

const PORT = process.env.PORT || 8080
mApp.listen(PORT, () => {
    console.log(`I am on Port: ${PORT}`)
})