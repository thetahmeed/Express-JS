





const mExpress = require('express')
const mMorgan = require('morgan')

const mApp = mExpress()

mApp.use(mMorgan('dev'))
mApp.use(mExpress.urlencoded({extended : true}))
mApp.use(mExpress.json())

// changing DEFAULT tamplate engine to EJS
mApp.set('view engine', 'ejs')

mApp.get('/', (req, res) => {

    let post = {
        title : 'This is title',
        body : 'This is body',
        visible : true
    }

    res.render('index', {title: "I am a dynamic data", post})
})

const PORT = process.env.PORT || 8080
mApp.listen(PORT, () => {
    console.log(`I am on Port: ${PORT}`)
})