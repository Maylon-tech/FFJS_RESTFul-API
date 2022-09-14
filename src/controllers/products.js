// Importando o Modelo
const ProductsModel = require('../models/products')


// metodo pro verbo GET
async function get(req, res) {
    const products = await ProductsModel.find()   // find() = Busca todos os produtos.


    res.send(products)
}

module.exports = {
    get,
}