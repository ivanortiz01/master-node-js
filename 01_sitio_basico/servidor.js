var http = require("http");

http.createServer(function (rq, rs) {
    console.log("Peticion recibida" + rq);

    rs.writeHead(200, { 'Content-type': 'text/plain' });
    rs.write("Hola mundo");
    rs.end();
}).listen(5500, 'localhost');

console.log("Servidor se muestra en http://localhost:5500");

