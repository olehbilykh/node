var express = require("express");
var app = express();
app.get('/hello', (req,res) => {
    res.status(200).json({msg:"Hello World"});
});
app.listen(5555);