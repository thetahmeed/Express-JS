





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

mApp.get('/', (req, res) => {
    res.send("<h1>Home</h1>")
})

// 4. now we use a different file for a sub route
// 4.1 create a new file. like: adminRouter.js and make some sub routes
// 4.2 is writen in the top ^
// 4.3 making linked with mApp to adminRouter
mApp.use('/admin', adminRouter)


mApp.listen(8080, () => {
    console.log("I am on 8080")
})