





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

// 3. string response
app.get("/string", function(req, res){
    res.send("I am a string");              // we can use "res.send()" or "res.end()"
});                                         // send() --> before end, end() --> used to end the res

// 4. manupulate status code
app.get("/status", function(req, res){
    res.status(401).end("Sorry. Unauthorised.");           
});                                       

// 4. JSON response
app.get("/json", function(req, res){
    
    var mJSON = [ //JSON array
        { // JSON object
            name: "Tahmeed",
            email: "tahmeed@gumail.com",
            password: "6gdj93b~!@dh990*",
            language : {
                bangla : "Ok",
                english : "Ok",
                hindi : "Ok"
            }
        }
    ]
    
    res.json(mJSON);         
}); 

// 5. download response
app.get("/download", function(req, res){
    res.download("./uploads/Game.txt")         
});      

// 6. redirect response // here we will redirect "link1" to "link2"
app.get("/link1", function(req, res){
        res.redirect("http://localhost:8000/link2")
}); 

app.get("/link2", function(req, res){
    res.send("This is link 2")
}); 


app.listen(8000, function(){

    console.log("Connected")

});