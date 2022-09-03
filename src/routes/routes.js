// importar o Router()
const router = require('express').Router()

// Definindo.
router.get('./clientes', (req, res) => {

    res.send({
        ok: 12345
    })
})

module.exports = router