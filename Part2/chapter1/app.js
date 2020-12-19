





const mExpress = require('express')

const app = mExpress()                  // create the server but need to listen

const PORT = process.env.PORT || 8080   // getting a port

app.listen(PORT, () => {                // listing
    console.log(`Searver in running on ${PORT}`)
})