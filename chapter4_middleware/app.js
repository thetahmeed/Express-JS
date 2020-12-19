

// here we are using a third-party middileware called 
// we can use it to see the request details on our console


const mExpress = require('express')
const mMorgan = require('morgan')                   // 1.


const mApp = mExpress()

mApp.use(mMorgan('dev'))                            // 2.

mApp.get("/", (req, res) => {
    res.send("Working")
})

mApp.listen(8080, () => {
    console.log('I am on PORT: 8080')
})