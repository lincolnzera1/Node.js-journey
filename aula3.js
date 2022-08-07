const http = require('http');
const porta = 3000;
const host = "127.0.0.1"; // theres no place like

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type":"text/html" 
    });
    if(req.url === "/"){
        res.write("<h2>Seja bem vindo</h1>")
    }else if(req.url === "/ultra"){
        res.write("<h1> =) ULTRA =) </h1>");
    }
    res.end();
});

servidor.listen(porta, host, () => console.log("Função de back log, chamada quando o servidor estiver ativo."))