//jshint esversion:6

const express = require('express');

const app = express();

app.get("/",function(req, res){
  // console.log(request);
  res.send("<h1>hello</h1>");
});

app.get("/contact", function(req,res){
  res.send("Contact me at : abc@gmail.com");
});

app.get("/about", function(req,res){
  res.send("I am Azeem. Express check");
});

app.get("/hobbies", function(req,res){
  res.send("I love playing cricket");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
