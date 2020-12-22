





const mExpress = require('express')
const mMorgan = require('morgan')
const mMongoose = require('mongoose');


const mApp = mExpress();


mApp.use(mMorgan('dev'))
mApp.use(mExpress.urlencoded({extended: true}))
mApp.use(mExpress.json())


mApp.get('/', (req, res) => {
    res.json({
        name: 'Bond, Jems Bond'
    })
})


const PORT = process.env.PORT || 8080
mApp.listen(PORT, () => {
    console.log(`I am on Port: ${PORT}`)
})

