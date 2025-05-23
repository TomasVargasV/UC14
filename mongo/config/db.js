const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB conectado')
    } catch (error) {
        console.error('Erro ao se conectar com o MongoDB: ', error.message)
    }
}

module.exports = connectDB