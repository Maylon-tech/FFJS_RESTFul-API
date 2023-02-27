const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

// habilita o server para receber dados via POST (Formulario)
app.use(express.urlencoded({ extended: true }))

// Definindo as Rotas 
app.use('/api', routes)

// Executando o Servidor
const PORT = process.env.PORT || 9090
app.listen(PORT, () => console.log('server running...'))