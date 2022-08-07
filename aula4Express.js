const express = require('express');
const app = express();
const porta = process.env.PORT;

/* const servidor = http.createServer((req, res) => {
    res.statusCode=200
    res.writeHead(200, {
        "Content-Type": "text/plain"
    })
    res.end("Curso novamente cfb");
}); */

app.get('/', (req, res) => {
    res.send("ULTRA LAB")
})
app.get('/lab', (req, res) => {
    res.json({lab: "ULTRA"})
})

/* servidor.listen(3001, () => {console.log("Servidor rodando")}); */

app.listen(3001, () => {console.log("Servidor rodando")});