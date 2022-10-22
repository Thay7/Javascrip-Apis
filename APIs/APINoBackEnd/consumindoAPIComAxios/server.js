//usaremos o axios para ir até a API do github e buscar os resultados, pois o express não consegue fazê-lo
//instalar com: npm i axios

const express = require('express')
const axios = require('axios')//importando o axios

const app = express()

app.listen('3000')

app.route('/').get((req, res) => {

      axios.get('https://api.github.com/users/Thay7')  //usando GET pois é o metodo do axios que faz requisições em API
    //  .then(result => res.send(result.data)) //usando then e catch por que o axios trabalha com prommessas
     .catch(error => console.log(error))

     //exemplo para pegar so um item da API
     //.then(result => res.send(result.data.avatar_url)) tras somente a URL 

     //exemplo para mostrar o avatar em si e não a URL
     .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) //tras a imagem
})