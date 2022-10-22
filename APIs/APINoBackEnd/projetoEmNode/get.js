const express = require('express') //puxando o modulo express e colocando dentro da variavel 

const app = express() //passando express com os parenteses pois estou inicializando o modulo. em seguida guardo o modulo inicializado dentro da variavel app

app.listen('3000') //ouvindo a porta do navegador para quando abrirmos ela no navegador vermos o codigo la

//criando rota GET
//route é uma função do express que trabalho com rotas.
app.route('/').get((req, res) => res.send("Exemplo rota")) //passar primeiro a rota, depois o meotodo HTTP e falar o que vai ser mostrado. sempre passar como argumento o req e res.
app.route('/sobre').get((req, res) => res.send("Exemplo outra rota")) //exemplo de outra rota, a "sobre"
