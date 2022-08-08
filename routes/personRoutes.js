const express = require('express')
const { findOne } = require('../models/Person')
const router = express.Router()
const Pessoa = require('../models/Person')

router.post("/", async (req, res) =>  { // esse não bate com o "/" de baixo pq é post
    
    // req.body
    const {nome, idade, aprovado} = req.body

    const pessoa = {
        nome,
        idade,
        aprovado
    }

    try {
        await Pessoa.create(pessoa)
        console.log("Pessoa dicionada com sucesso")
        res.send("blu7blabla1")
    } catch (error) {
        console.log("Houve um erro: " + error)
        res.send("blu7blabla")
    }

})

router.get('/', async (req,res)=> {
    const pessoas = await Pessoa.find()

    res.json(pessoas)
})

router.get('/:nome', async (req,res)=> {
    const nome = req.params.nome //nome vai ser oq o server receber, que eu vou digitar no postman
    try {   
        const person = await Pessoa.findOne({nome: nome}) // (variavel qualquer q vai encontrar nome) : (req.paramns.nome)
        if(!person){
            res.json({message: "usuario não encontrado"})
            return
        }
        res.status(200).json(person.nome)
    } catch (error) {
        res.status(500).json({error: error})
    }
})


// Update - atualização de dados (PUT, PATCH)
// PUT - atualização de todos os campos
// PATCH - atualização de 1 campo

router.patch('/:nomeReq', async (req, res) => {
    const nomeReq = req.params.nomeReq
    const {nome, idade, aprovado} = req.body
    const pessoa = {
        nome,
        idade,
        aprovado
    }

    try {
        const updatePessoa = await Pessoa.updateOne({nome: nomeReq}, pessoa);

        if(updatePessoa.matchedCount === 0){ // Se não atualizar ninguem...

            res.status(422).json({message: "O usuario não foi encontrado!!"})
            return

        }

        res.status(200).json(pessoa)
    } catch (error) {
        res.json({error: error})
    }
})


// Remover usuarios

router.delete('/:nomeReq', async (req, res) => {
    const nomeReq = req.params.nomeReq
    const pessoa = await Pessoa.findOne({nome: nomeReq})
    if(!pessoa){
        res.status(422).json({message:"usuario não foi encontrado..."})
        return
    }
    try {
        await Pessoa.deleteOne({nome: nomeReq})
        res.json({message:"Usuario removido com sucesso"})
    } catch (error) {
        res.json({error: error})
    }
})

module.exports = router