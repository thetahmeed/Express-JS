Middleware: Middleware is a function(s) which we can call between req and res.
Example: User request > Middleware function (which is checking user is logged in or not) > response

Q: How we will ggot the middleware?
A: We can make our own or use from someone else by installing their middleware.

Q: How we can use it?
A: WE can use it two ways.
    1. "app.use(mMiddleware('param'))" it will work for every route (URL)
    2. "mApp.get("/pagename", mMorgan('dev'),(req, res) => {... ..." it will execute only in this route (URL)