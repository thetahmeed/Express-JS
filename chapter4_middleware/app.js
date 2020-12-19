

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
        
    }else{
        console.log('I am middleware 01')
    }
    next()                                              // you have to call "next()" at the end
}

// 4.1 using our mMiddleware
mApp.get("/middleware", mMiddleware,(req, res) => {
    res.send("Middlewaare page")
})

// 4.2 creating a self-made middleware like morgan
function mMiddleware2(){
    return (req, res, next) => {
        console.log(`I am middleware two ${req.method} ${req.url}`)
        next()
    }
}                  
mApp.get("/middleware2", mMiddleware2(),(req, res) => {
    res.send("Middlewaare page2")
}) 
    
// 4.3 use all middleware
const allMiddleware = [mMiddleware, mMiddleware2()]     // make an array and use the array

mApp.get("/middleware3", allMiddleware,(req, res) => {
    res.send("Middlewaare page3")
}) 

// 4.4 some middlewares
// http://expressjs.com/en/resources/middleware.html
    

mApp.listen(8080, () => {
    console.log('I am on PORT: 8080')
})