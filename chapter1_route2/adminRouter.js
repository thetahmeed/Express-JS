





const adminRouter = require('express').Router()

// making sub route
adminRouter.get('/signin', (req, res) => {
    res.send("<h1>Sign in</h1>")
})
adminRouter.get('/signup', (req, res) => {
    res.send("<h1>Sign up</h1>")
})
adminRouter.get('/signout', (req, res) => {
    res.send("<h1>Sign out</h1>")
})


// making this router visiable for others
module.exports = adminRouter
// now you have to import in your main.js file. Ex: 