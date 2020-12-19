

// here we are using a third-party middileware called 
// we can use it to see the request details on our console


const mExpress = require('express')
const mMorgan = require('morgan')                       // 1.


const mApp = mExpress()

//mApp.use(mMorgan('dev'))                              // 2. here for all route

mApp.get("/",(req, res) => {
    res.send("Home page")
})

mApp.get("/about", mMorgan('dev'),(req, res) => {       // 3. here for a particular route. use comma for multiple
    res.send("About page")
})


// 4. creating a self-made middleware
function mMiddleware(req, res, next){                   // you have to send these 3 param
    if(req.url == "/middleware"){
        res.send('alert("This page blocked by the Admin")')
    }

    next()                                              // you have to call "next()" at the end
}

// 4.1 using our mMiddleware
mApp.get("/middleware", mMiddleware,(req, res) => {
    res.send("Middlewaare page")
})



mApp.listen(8080, () => {
    console.log('I am on PORT: 8080')
})