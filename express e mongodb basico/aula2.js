const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type":"text/plain" // Tipo de retorno = texto comum
    })
    res.write("Hello, world!\n");
    res.end();
}).listen(1337);
