var express = require("express");
var fs = require("fs");

var app = express();

const pug = require("pug");

app.use(express.static( __dirname + '/public'));

app.get("/", (req, res) => {
    res.render("index.pug", {
        titulo: "El nombre de mi appcita",
        parrafo: "lorem ipsum guaguagua"
    });
});
app.get("/otro", (req, res) => {
    res.render("otro.pug");
});

camisetasLista = [
    {
        color: "naranja", 
        imagen: "/images/camiseta1.png"
    },
    {
        color: "roja", 
        imagen: "/images/camiseta2.png"
    },
    {
        color: "azul", 
        imagen: "/images/camiseta3.png"
    },
    {
        color: "verde", 
        imagen: "/images/camiseta4.png"
    }
]
app.get("/tienda", (req, res) => {
    res.render("tienda.pug", {
        camisetas: camisetasLista
    });
});
app.get("/tienda/comprar/:color", (req, res) => {
    let datoCamiseta = camisetasLista.filter((item) => {
        if(req.params.color == item.color) {
            return item;
        }
    })[0];
    res.render("detalles.pug", {
        color: req.params.color,
        camiseta: datoCamiseta
    });
});

app.use((req, res) => {
    let URLerror = req.originalUrl;

    res.status(400);
    res.render("404.pug", {
        textError: URLerror
    });
})

app.listen(3000, () => {
    console.log("Servidor iniciado: http://localhost:3000")
});