const ProductsModel = require('../models/products')

// Funciton assincrona no Metodo GET
async function get(req, res) {
    const { id } = req.params

    // Se Tiver ID (true) entao retorne . senao {} vazio.
    const obj = id ? { _id: id } : null
    // Procura produtos no BD com metodo find()
    const products = await ProductsModel.find(obj)  

    res.send(products)
    console.log(products)

}


async function post(req, res) {

    const {
        name,
        brand, 
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send()
}


async function put(req, res) {
    const { id } = req.params   // Pelo parâmetro da URL

        //   **** PRIMEIRA MANEIRA:   *****

    // const product = await ProductsModel.findOne({ _id: id })  // poderia ser pelo método findById()
    // Temum método - updateOne()  - para poder Atualizar..
   //  await product.updateOne(req.body)
    // res.send({
      //  message: 'seccess', // manda uma mesagem junto
      //  product,   // Busca os proudto pelo ID especifico no DB compass
    // })

        //   **** SEGUNDA MANEIRA:   *****

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
                                // Prim valor _ método para procura o produto  --  Segundo valor - para alterar. -- Terc valor  -  Um Novo Valor
    res.send({
        message: 'success OK',
        product,
    })

}


async function remove(req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    let message = remove.ok 
        ? 'error'
        : 'success'

        res.send({
            message,
        })
            console.log(message)
}

module.exports = {
    get,
    post,
    put,
    remove,
}