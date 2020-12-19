





const mExpress = require('express')

// 1. Creating the server
const app = mExpress()                  // create the server but need to listen

// 3. creating multiple routes
app.get("/chat", (req, res) => {
    res.send('<h1>Chat</h1>')
})

app.get("/profile", (req, res) => {
    res.send('<h1>Profile</h1>')
})

// 2. creating a route
app.get("/", (req, res) => {            // this is ROOT route and it should be in the last position
    //res.send('<h1>Hola</h1>')         // response as a HTML message
    res.json({                          // response as a JSON
        name: "Tahmeed",
        meassage: "Lets shake the world"
    })
})

// 4. creating a route for unexpested route request and it should be after the root route
app.get('*', (req, res) => {
    res.send('<h1>404! Data not found</h1>')
})




const PORT = process.env.PORT || 8080   // getting a port

app.listen(PORT, () => {                // listing
    console.log(`Searver in running on ${PORT}`)
})