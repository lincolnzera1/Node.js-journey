require('dotenv').config()
const mongodb = require('mongodb').MongoClient

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const url = `mongodb+srv://guilherme:${dbPassword}@cluster0.jiz8pb1.mongodb.net/?retryWrites=true&w=majority`

mongodb.connect(url, (erro, banco) => {
    //Criar um db e uma collection e envia dados pra la com insertOne
    if(erro) throw erro;
    const dbo = banco.db("nodeJourney") // definimos nosso BD
    const obj = {
        curso: "Curso de node",
        canal: "CFB Cursos"
    }
    const colecao = "cfbcursos"
    dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
        if (erro){
            throw  erro
        }
        console.log("1 novo curso inserido.")
        banco.close()
    })
})