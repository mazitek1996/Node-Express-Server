//jshint eversion:6
const express = require("express");

const app = express();

app.get('/', function(req, res){
    res.send("<h1>Ndewo!</h1>")
});

app.get('/about', function(req, res){
    res.send("about me")
});

app.get('/contact', function(req, res){
    res.send("contact me")
});

app.listen(5000, function(){
    console.log("server is listening at port 5000");
});