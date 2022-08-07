const express = require('express')
const rotas = require('./rotas')
const app = express()


// usando o arquivo de rotas
app.use('/', rotas) 

app.get('*', (req,res) => {
    res.send("Vc se perdeu")
})

app.listen(3000, ()=> {console.log("Rodando!!")})