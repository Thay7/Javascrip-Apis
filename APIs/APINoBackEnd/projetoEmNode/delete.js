//criando o middleware (transforma a requisição que é passada na api em json)
//o use é um metodo que usamos para fazer o middleware
app.use(express.json()) //puxando o express sem estar inicializado, pois precisamos buscar o json dentro dele


//criando rota DELETE

app.route('/:identificador').delete((req, res) => { //na rota(url) passamos além dela, o ":identificador" o : indica que se trata de uma variavel e é ela que iremos deletar

    res.send(req.params.identificador)//quando passamos variavel pela rota (url), chamamos de params. colocando paramns.identificador temos o conteudo

})