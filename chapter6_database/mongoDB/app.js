





const mExpress = require('express')
const mMorgan = require('morgan')

// 01 import
const mMongoose = require('mongoose')                      



const mApp = mExpress()

mApp.use(mMorgan('dev'))
mApp.use(mExpress.urlencoded({extended: true}))
mApp.use(mExpress.json())


// 03. create a schema // schema defines the shape of model
let mSchema = mMongoose.Schema
let testSchema = new mSchema({
    name: String
})

// create a model with the help of this schema // first letter should be capital // 1st param will be the table name, first letter will be small and name will be plural
let Model = mMongoose.model('Model', testSchema)



mApp.get('/', (req, res) => {
    
    // 3.1 putting data to the database acording the shape of our model
    let model = new Model({
        name : 'Tahmeed'
    })
    // 3.2 saving the data
    model.save()
        .then(t => {
            res.json(t)
        })
        .catch(e => {
            console.log(e)
            res.status(500).json({
                error: 'Error occurred'
            })
        })

})

const PORT = process.env.PORT || 8080

// 02 connect
mMongoose
    .connect(`mongodb+srv://tahmeedul:cK4H6VVF9fPQPYF6@cluster0.mvhfs.mongodb.net/user?retryWrites=true&w=majority`, {
        useNewUrlParser: true
    }).then(() => {
        mApp.listen(PORT, () => {
            console.log(`I am on Port: ${PORT}`)
        })
    }).catch(e => {
        console.log(e)
    })
