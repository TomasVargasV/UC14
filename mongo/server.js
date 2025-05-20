const express = require('express')
const cors = require('cors')
const dontenv = require('dotenv')
const connectDB = require('./config/db')
const ProdutoRoutes = require('./routes/ProdutoRoutes')

dontenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/produto', ProdutoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em: ${PORT}`)
})