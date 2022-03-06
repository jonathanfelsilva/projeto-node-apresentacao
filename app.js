const express = require('express')
const utilitarios = require('./utilitarios')

const app = express()
app.use( express.json() )

const router = express.Router()
router.get('/pessoa', (req, res) => {
    res.status(200)
        .send( utilitarios.gerarJson() )
})

app.use(router)

module.exports = app