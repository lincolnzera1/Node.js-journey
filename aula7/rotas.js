// Preparação para trabalhar com rotas
const express = require('express')
const rotas = express.Router() // Esse Router é melhor que o simples app = express(), pois posso passar parametros nas rotas e etc.

let cursosInfo = [
    {"curso":"ultra", "info":"Lab avançado"},
    {"curso":"lincoln", "info":"aluno do lit"},
    {"curso":"play", "info":"meu xbox"},
    {"curso":"no presente", "info":"Para o futuro."},
]

rotas.get("/", (req, res) => {
    res.json({ola: "welcolme!!"})
});

rotas.get("/:cursoid", (req, res) => {
    const curso = req.params.cursoid // pega o parametro (/:cursoid) que digitarem no browser

    // esse i é a lista cursosInfo. O .curso acessa returna o value do map
    let cursoI = cursosInfo.find(i =>i.curso == curso)
    if(!cursoI){
        res.send("Nada foi encontrado")
    }else{
        res.json(cursoI)
    }
});

module.exports = rotas