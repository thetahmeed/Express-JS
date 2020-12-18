





var mExpress = require('express');

var app = mExpress();

// 1. GET request URL query
// here we are sending request by a URL and getting the request by "req" param.

app.get("//url?firstName=Tahmeedul&lastName=Islam", function(req, res){

    let firstName = req.query.firstName
    let lastName = req.query.lastName
    
    res.send(firstName+" "+lastName)

})

// 2. GET request header
app.get("/header", function(req, res){

    let firstName = req.header("firstName")
    let lastName = req.header("lastName")
    
    res.send(firstName+" "+lastName)

})


app.listen(8000, function(){

    console.log("I am on port 8000")

})