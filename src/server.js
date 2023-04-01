const express = require('express')
//const path = require('path')

const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()
app.use(express.json())
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]


// Habilita CORs
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        // Mobile app
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin))  // Verificando se esta na Lista ou Nao. Se nao tiver mudar para False.

        callback(null, allowed)
    }
}))  // Com isso qualquer Libera fazer requisicao na API (Publicamente)

// habilita o server para receber dados via POST (Formulario)
app.use(express.urlencoded({ extended: true }))
// Na API est não utiliza mais esse bloco de código, a API não vai mais receber dados do Body (form) mas SIM no Corpo da Requisição.
// Porém tem que habiltar o uso do JSON()   -->   app.use(express.json())



// Definindo as Rotas 
app.use('/api', routes)

// Executando o Servidor
const PORT = process.env.PORT || 9090
app.listen(PORT, () => console.log('server running...'))