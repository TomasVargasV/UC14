const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String },
    categoria: { type: String },
    estoque: { type: Number }
}, { timestamps: true })

module.exports = mongoose.model('Produto', produtoSchema)