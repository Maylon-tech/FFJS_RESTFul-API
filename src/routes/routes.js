const router = require('express').Router()

router.get('/clients', (req, res) => {

    res.send({ 
        num: 12345678
        })
})

module.exports = router