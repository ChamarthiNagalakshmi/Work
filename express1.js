var express=require('express');
var app=express();
app.get('/',function(req,res){
	res.send("Welcome to express js world tested by Lakshmi");
});
app.listen(3000);