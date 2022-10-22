//forma de enviar informações para a API e elas não ficarem na URL, são enviadas de uma forma "escondida"
//so conseguimos enviar body pelo POST PUT e PATCH
//sempre que estivermos trabalando com requisição pelo body precisamos usar o middleware


//criando o server
const express = require('express') //puxando o modulo express e colocando dentro da variavel 

const app = express() //passando express com os parenteses pois estou inicializando o modulo. em seguida guardo o modulo inicializado dentro da variavel app

app.listen('3000') //ouvindo a porta do navegador para quando abrirmos ela no navegador vermos o codigo la

//criando o middleware (transforma a requisição que é passada na api em json)
//o use é um metodo que usamos para fazer o middleware
app.use(express.json()) //puxando o express sem estar inicializado, pois precisamos buscar o json dentro dele

app.route('/').post((req, res) => {
    const {nome, cidade, livros_favoritos} = req.body //
    res.send(`Meu nome é ${nome}, sou de ${cidade}`) //
})