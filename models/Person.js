const mongoose = require("mongoose")

const Pessoa = mongoose.model("Pessoa", {
    nome: String,
    idade: Number,
    aprovado: Boolean,
})

module.exports = Pessoa