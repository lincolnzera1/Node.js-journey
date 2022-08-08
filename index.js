// api rest

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")


const dbPassword = process.env.DB_PASSWORD

const mongoUrl = `mongodb+srv://guilherme:${dbPassword}@cluster0.jiz8pb1.mongodb.net/nodeJourney?retryWrites=true&w=majority`


// Configuração do json, para ler e enviar arquivos JSON
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


// Rotas da API

const personRoutes = require('./routes/personRoutes')

// só existem essas 2 rotas e mais 1 lá em baixo
app.use('/pessoa', personRoutes) 
app.use('/consultar', personRoutes)


app.get("/", (req, res) => { // O req é algo que está no site e posso usalo aqui, e o res é para enviar p o site
    //res.send("Have a good afternoon")
    res.json({message: "Olá, Mundo!"})
})


mongoose.connect(mongoUrl).then(() => {
    app.listen(3000, () => {console.log("Servidor iniciado")})
}).catch((err) => {
    console.log("ERro foi " + err)
})



