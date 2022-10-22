//criando o server
const express = require('express') //puxando o modulo express e colocando dentro da variavel 

const app = express() //passando express com os parenteses pois estou inicializando o modulo. em seguida guardo o modulo inicializado dentro da variavel app

app.listen('3000') //ouvindo a porta do navegador para quando abrirmos ela no navegador vermos o codigo la

//criando o middleware (transforma a requisição que é passada na api em json)
//o use é um metodo que usamos para fazer o middleware
app.use(express.json()) //puxando o express sem estar inicializado, pois precisamos buscar o json dentro dele

//criando rota PUT
let author = "Thay" //variavel que será alterada com o PUT

app.route('/').get((req, res) => res.send(author))//mostrando o conteudo da variavel author 

app.route('/').put((req, res) => { //alterando o conteudo da variavel author
    author = req.body.author //atribuindo para a variavel author o conteudo do que foi enviado para a requisição 
    res.send(author) //mostrando na API a variavel depois de alterada
})