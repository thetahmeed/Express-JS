





const mExpress = require('express')

const userRouter = mExpress.Router()                    // 1. created a router from express
const adminRouter = mExpress.Router()                   // we can use multiple router for multiple reason

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


mApp.listen(8080, () => {
    console.log("I am on 8080")
})