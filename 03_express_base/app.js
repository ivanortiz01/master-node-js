var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Hola mundo desde express");
});

app.listen(3000, () => {
    console.log("Servidor iniciado: http://localhost:3000")
});