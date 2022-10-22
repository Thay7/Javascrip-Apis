//criando o server
const express = require('express') //puxando o modulo express e colocando dentro da variavel 

const app = express() //passando express com os parenteses pois estou inicializando o modulo. em seguida guardo o modulo inicializado dentro da variavel app

app.listen('3000') //ouvindo a porta do navegador para quando abrirmos ela no navegador vermos o codigo la
