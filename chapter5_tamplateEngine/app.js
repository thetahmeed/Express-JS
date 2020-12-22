





const mExpress = require('express')
const mMorgan = require('morgan')

const mApp = mExpress()

mApp.use(mMorgan('dev'))
mApp.use(mExpress.urlencoded({extended : true}))
mApp.use(mExpress.json())

// changing DEFAULT tamplate engine to EJS
mApp.set('view engine', 'ejs')


mApp.get('/about', (req, res) => {
    res.render('pages/about')
})
mApp.get('/help', (req, res) => {
    res.render('pages/help')
})

mApp.get('/', (req, res) => {

    let post = {
        title : 'This is title',
        body : 'This is body',
        visible : true
    }

    let posts = [
        {title: 'Post 1',author: 'Tahmeed'},
        {title: 'Post 2',author: 'Tahmeed'},
        {title: 'Post 3',author: 'Tahmeed'},
        {title: 'Post 4',author: 'Tahmeed'}
    ]

    // first param is the location of our EJS file, No need to add extestions
    res.render('pages/index', {title: "I am a dynamic data", post, posts})
})

const PORT = process.env.PORT || 8080
mApp.listen(PORT, () => {
    console.log(`I am on Port: ${PORT}`)
})