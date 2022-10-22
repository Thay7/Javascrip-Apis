//criando o middleware (transforma a requisição que é passada na api em json)
//o use é um metodo que usamos para fazer o middleware
app.use(express.json()) //puxando o express sem estar inicializado, pois precisamos buscar o json dentro dele

//criando rota POST
app.route('/').post( (req, res) => console.log(req.body)) //tudo que é enviado POST, é recebido no req. neste exemplo queremos pegar o body da requisição e ver no console
app.route('/').post( (req, res) => res.send(req.body)) //exemplo que pega o corpo da requisição e envia como resposta la para a API