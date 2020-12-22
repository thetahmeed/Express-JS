





const mExpress = require('express')
const mMorgan = require('morgan')
const mMongoose = require('mongoose')                       // 01



const mApp = mExpress()

mApp.use(mMorgan('dev'))
mApp.use(mExpress.urlencoded({extended: true}))
mApp.use(mExpress.json())



mApp.get('/', (req, res) => {
    res.json({
        message: 'Hello Tahmeed'
    })
})


const PORT = process.env.PORT || 8080

// 02
mMongoose
    .connect(`mongodb+srv://tahmeedul:cK4H6VVF9fPQPYF6@cluster0.mvhfs.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
        useNewUrlParser: true
    }).then(() => {
        mApp.listen(PORT, () => {
            console.log(`I am on Port: ${PORT}`)
        })
    }).catch(e => {
        console.log(e)
    })
