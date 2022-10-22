//forma de passar os parametros traves da URL
//identificado atraves do ? forma de usar: ?variavel=valor

const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => res.send(req.query))

//exemplo no insomnia: localhost:3000?nome=thay