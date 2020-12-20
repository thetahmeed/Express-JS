





const mExpress = require('express')

const userRouter = mExpress.Router()                    // 1. created a router from express // we can use multiple router for multiple reason                                                       


//4.2 exporting separate router
const adminRouter = require('./adminRouter')

const mApp = mExpress();

// 2. making sub route
userRouter.get('/signin', (req, res) => {
    res.send("<h1>Sign in</h1>")
})
userRouter.get('/signup', (req, res) => {
    res.send("<h1>Sign up</h1>")
})
userRouter.get('/signout', (req, res) => {
    res.send("<h1>Sign out</h1>")
})

// 3. connecting userRouter to our mApp before root ("/"), first param is group holder ("user/signin")
mApp.use('/user', userRouter)

// 4. now we use a different file for a sub route
// 4.1 create a new file. like: adminRouter.js and make some sub routes.
// 4.2 is writen in the top ^
// 4.3 making linked with mApp to adminRouter
mApp.use('/admin', adminRouter)

// 5. create, read, update and delete all post
mApp.post('/post', (req, res) => {
    res.send("<h1>Create</h1>")
})
mApp.get('/post', (req, res) => {
    res.send("<h1>Read</h1>")
})
mApp.put('/post', (req, res) => {
    res.send("<h1>Put</h1>")
})
mApp.delete('/post', (req, res) => {
    res.send("<h1>Delete</h1>")
})

// 5.1 for a single post // we will do this by post id/dynamic url/url param // post id will be in the URL
mApp.get('/post/:productid', (req, res) => {                                 // here "productid" is dynamic
    res.send("<h1>This is a single product</h1>")                            // we will extract the "productid" and find the product from database query
})

// 5.2 extract the "productid"
mApp.get('/getpid/:productid', (req, res) => {  
    
    res.send(`The post id is ${req.params.productid}`)
       
})

// 5.3 we can even use multiple
mApp.get('/getpid/:productid/:reviews', (req, res) => {  
    
    res.send(`The post id is ${req.params.reviews}`)
       
})

// 6. query string                                          // Ex: ?name=ferret&color=purple
mApp.get('/query', (req, res) => {  
    // extracting the values
    res.send('Query is: '+req.query.age)
})

// 7. coding handler/controler in separate .js file
// create a new .js file called "separateHandler"
const {
    mSeparateHandler1,
    mSeparateHandler2,
    mSeparateHandler3,
    mSeparateHandler4,
} = require('./saperateHandeler')

mApp.get('/handler1', mSeparateHandler1)
mApp.get('/handler2', mSeparateHandler2)
mApp.get('/handler3', mSeparateHandler3)
mApp.get('/handler4', mSeparateHandler4)

mApp.get('/', (req, res) => {
    res.send("<h1>Home</h1>")
})
mApp.listen(8080, () => {
    console.log("I am on 8080")
})