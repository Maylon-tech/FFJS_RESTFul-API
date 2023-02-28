const ProductsModel = require('../models/products')

// Funciton assincrona no Metodo GET
async function get(req, res) {
    const { id } = req.params

    // Se Tiver ID (true) entao retorne . senao {} vazio.
    const obj = id ? { _id: id } : null
    // Procura produtos no BD com metodo find()
    const products = await ProductsModel.find(obj)  

    res.send(products)

}

module.exports = {
    get,
}