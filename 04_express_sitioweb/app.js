var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.static( __dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(3000, () => {
    console.log("Servidor iniciado: http://localhost:3000")
});