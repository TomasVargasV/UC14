const Produto = require('../models/Produto')

exports.getProdutos = async (req, res) => {
    const produtos = await Produto.find()
    res.json(produtos)
}

exports.getProdutoById = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id)
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        }
        res.json(produto)
    } catch (error) {
        res.status(401).json({ message: 'ID inválido' })
    }
}

exports.createProduto = async (req, res) => {
    const novoProduto = new Produto(req.body)
    const produtoSalvo = await novoProduto.save()
    res.status(201).json(produtoSalvo)
}

exports.updateProduto = async (req, res) => {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(produtoAtualizado)
}

exports.deleteProduto = async (req, res) => {
    await Produto.findByIdAndDelete(req.params.id)
    res.json({ message: 'Produto removido com sucesso' })
}