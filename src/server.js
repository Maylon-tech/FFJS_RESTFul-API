// Importando framework do node - backend
const express = require('express')
//const path = require('path')

//const db = require('./database')

// Definindo na Pasta Routes 
const routes = require('./routes/routes')

// Utilizando express como APP.
const app = express()

// Conexao com banco de dados
//db.connect()

// Definindo Template Engine
//app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname, 'views'))


// Definindo arquibo Publicos
//app.use(express.static(path.join(__dirnmae, 'views')))

// Habilitar SERVER para receber dados via POST (formulario)
app.use(express.urlencoded({ extended: true }))

// Definindo'as Rotas
app.use('/api', routes)

// 404 error (not found)
//app.use(req, res) => {
//    res.send('Pagina nao encontrado!!')}

// Executando Servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))