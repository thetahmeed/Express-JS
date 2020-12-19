





var mExpress = require('express');

var app = mExpress();

/*
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

})*/

// 3. 
var mBodyParser = require('body-parser');

app.use(mBodyParser.json);
app.post("/json", function(req, res){

    let JsonData = req.body;
    let text = JSON.stringify(JsonData);
    
    res.send(text)

})


app.listen(8000, function(){

    console.log("I am on port 8000")

})