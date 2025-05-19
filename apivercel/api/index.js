import express from 'express'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 3000
const livrosPath = join(__dirname, '../livros.json')

app.use(express.json())

const getLivros = () => {
    const data = fs.readFileSync(livrosPath)
    return JSON.parse(data)
}

app.get('/api/livros', (req, res) => {
    const livros = getLivros()
    res.json(livros)
})

app.get('/api/livros/:id', (req, res) => {
    const { id } = req.params
    const livros = getLivros()
    const livro = livros.find(f => f.id === id)

    if (livro) {
        res.json(livro)
    } else {
        res.status(404).json({ error: 'Livro não encontrado' })
    }
})

app.post('/api/livros', (req, res) => {
    const { titulo, ano, genero } = req.body

    if (!titulo || !ano || !genero) {
        return res.status(400).json({ error: 'Preencha todos os campos' })
    }

    const livros = getLivros()
    const novoLivro = {
        id: (livros.length + 1).toString(),
        titulo,
        ano,
        genero
    }
    livros.push(novoLivro)

    fs.writeFileSync(livrosPath, JSON.stringify(livros, null, 2))

    res.status(201).json(novoLivro)
})

app.delete('/api/livros/:id', (req, res) => {
    const { id } = req.params
    let livros = getLivros()
    livros = livros.filter(f => f.id !== id)

    fs.writeFileSync(livrosPath, JSON.stringify(livros, null, 2))

    res.status(204).send()
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})