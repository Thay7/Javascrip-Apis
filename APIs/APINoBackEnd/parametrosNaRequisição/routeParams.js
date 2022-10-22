//forma de enviar informações(params) atraves da rota

//criando o server
const express = require('express') //puxando o modulo express e colocando dentro da variavel 

const app = express() //passando express com os parenteses pois estou inicializando o modulo. em seguida guardo o modulo inicializado dentro da variavel app

app.listen('3000') //ouvindo a porta do navegador para quando abrirmos ela no navegador vermos o codigo la

//criando o middleware (transforma a requisição que é passada na api em json)
//o use é um metodo que usamos para fazer o middleware
app.use(express.json()) //puxando o express sem estar inicializado, pois precisamos buscar o json dentro dele

//enviando a variavel nome pela rota
app.route('/:variavel').get((req, res) => res.send(req.params.variavel)) //dando um print na variavel pelo res.send()
//com o codigo acima, posso ir no navegador e colocar qualquer coisa após a barra que entrará nessa variavel e será mostrado na tela

//criando rota de exemplo com duas barras
app.route("/identidade/:nome").get((req, res) => res.send(req.params.nome))