require('dotenv').config()
const mongodb = require('mongodb').MongoClient

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const url = `mongodb+srv://guilherme:${dbPassword}@cluster0.jiz8pb1.mongodb.net/?retryWrites=true&w=majority`

const express = require('express')
const app = express()

mongodb.connect(url, (erro, banco) => {
    //
    if(erro) throw erro;
    const dbo = banco.db("nodeJourney") // definimos nosso BD
    const obj = {
        curso: "Curso de node",
        canal: "CFB Cursos"
    }
    const colecao = "cfbcursos"
    
    dbo.collection(colecao).find({}, {projection: {_id:0, canal: 0}}).toArray((erro, resultado) => {
        if (erro){
            throw  erro
        }
        console.log(resultado[0].curso) // pra acessar o "map", no lugar de ["curso"], bota .curso
        
        app.get('/', (req, res) => {
            res.send(resultado)
        })
        
        banco.close()
    })
})

app.listen(3000, () => {"dqwdwq"})