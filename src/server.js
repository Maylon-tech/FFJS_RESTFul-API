const express = require('express')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()
app.use(express.json())
db.connect()

// habilita o server para receber dados via POST (Formulario)
app.use(express.urlencoded({ extended: true }))
// Na API est não utiliza mais esse bloco de código, a API não vai mais receber dados do Body (form) mas SIM no Corpo da Requisição.
// Porém tem que habiltar o uso do JSON()   -->   app.use(express.json())



// Definindo as Rotas 
app.use('/api', routes)

// Executando o Servidor
const PORT = process.env.PORT || 9090
app.listen(PORT, () => console.log('server running...'))