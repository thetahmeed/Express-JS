





var mExpress = require('express');

var app = mExpress();

// 1. returning a response
app.get("/", function(req, res){

    res.send("<h1>Welcome to Express JS</h1>");

});

// 2. Routing. // multiplle response acording to different request
app.get("/chat", function(req, res){
    res.send("<h1>Chat</h1>");
});
app.get("/contact", function(req, res){
    res.send("<h1>Contact</h1>");
});
app.get("/profile", function(req, res){
    res.send("<h1>Profile</h1>");
});


app.listen(8000, function(){

    console.log("Connected")

});