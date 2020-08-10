var http = require("http");
var fs = require("fs");

http.createServer(function (rq, rs) {
    rs.writeHead(200, { 'Content-type': 'text/html' });

    switch (rq.url) {
        case "/":
            template = "inicio.html";
            break;
        case "/nodejs":
            template= "sobrenode.html";
            break;
        default:
            template = "404.html";
    }

    fs.readFile("./templates/" + template, (err, data) => {
        if(err) {
            rs.write("ERROR!! " + err);
        }

        rs.write(data.toString());
        rs.end();
    });    
}).listen(5500, 'localhost');

console.log("Servidor se muestra en http://localhost:5500");