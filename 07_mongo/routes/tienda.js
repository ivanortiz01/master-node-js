var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

require("../models/camisetas");
var Camisetas = mongoose.model("camisetas");

/* GET users listing. */
router.get('/', function(req, res, next) {
    Camisetas.find((err, camisetas) => {
        if(err) return next(err);

        res.render('tienda/index', {
            titulo: "Tienda de Camisetas",
            camisetas: camisetas
        })
    });
});

router.get("/agregar", function(req, res, next) {
    res.render("tienda/agregar", {
        titulo: "Tienda de Camisetas",
    });
});

router.post("/agregar", function(req, res, next) {
    var newObject = new  Camisetas({
        color: req.body.color,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    });

    newObject.save();

    res.redirect("/tienda");
});

module.exports = router;
