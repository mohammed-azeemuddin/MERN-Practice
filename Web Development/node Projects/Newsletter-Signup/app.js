//jshint esversion: 6

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');


const app = express();

app.get("/",function(req,res){
	res.send("hello");
})

app.listen(3000, function(){
	console.log("server is running on port 3000");
});
