const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.render('foodadda');
})
app.get("/signup.html",function(req,res){
    res.render('signup');
});





app.listen(3000,function(){
    console.log("Connected");
})