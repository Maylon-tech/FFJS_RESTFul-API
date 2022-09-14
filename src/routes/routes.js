// importar o Router()
const router = require('express').Router()

// Importar o Controller
const ProductController = require('../controllers/products')


// Definindo.
router.get('/products', ProductController.get)
//router.post('./products', ProductController.post)
//router.put('./products/:id', ProductController.put)
//router.delete('./products/:id', ProductController.delete)


module.exports = router