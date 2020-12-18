





var mExpress = require('express');

var app = mExpress();

// 1. request URL query // ULR: http://localhost:8000?firstName=Tahmeedul&lastName=Islam
app.get("/", function(req, res){

    let firstName = req.query.firstName
    let lastName = req.query.lastName
    
    res.send(firstName+" "+lastName)

})


app.listen(8000, function(){

    console.log("I am on port 8000")

})