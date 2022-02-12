var express = require("express");
var app = express();
app.get('/hello',function(req,res){
    var myJson = {};
    myJson.msg = "Hello World!";
    res.json(myJson);
});
app.listen(8080);