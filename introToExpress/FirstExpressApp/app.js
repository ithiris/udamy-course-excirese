var express = require("express");
var app = express();

process.env.PORT = 3000

app.get("*",function (req,res) {
    res.send("you Are a star!!!");
    
});

// "/" => "Hi there!"
app.get("/", function (req, res) {

    res.send("Hi there!");

});

app.get("/dog",function (req,res) {
    console.log("SOMEONE MADE A  REQUEST TO /DOG!!!")
    res.send("MEOW");
})


// Tell Express to listen for requests (start server)

app.listen (process.env.PORT, process.env.IP,function () {
    console.log("Server has Started");
});