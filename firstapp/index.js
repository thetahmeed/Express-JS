





var mExpress = require('express');

var app = mExpress();

app.get("/", function(req, res){

    res.send("<h1>Welcome to Express JS</h1>");

});

app.listen(8000, function(){

    console.log("Connected")

});