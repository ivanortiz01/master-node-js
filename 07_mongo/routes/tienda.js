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

module.exports = router;
