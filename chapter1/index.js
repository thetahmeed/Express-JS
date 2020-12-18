





var mExpress = require('express');

var app = mExpress();

// 1. returning a response
app.get("/", function(req, res){

    res.send("<h1>Welcome to Express JS</h1>");

});

// 2. Routing. // multiplle response acording to different request
app.post("/chat", function(req, res){
    res.send("<h1>Chat</h1>");
});
app.put("/contact", function(req, res){
    res.send("<h1>Contact</h1>");
});
app.delete("/profile", function(req, res){
    res.send("<h1>Profile</h1>");
});

// 3. returning a string response
app.get("/string", function(req, res){
    res.send("I am a string");              // we can use "res.send()" or "res.end()"
});                                         // send() --> position is first, end() --> position is last


app.listen(8000, function(){

    console.log("Connected")

});