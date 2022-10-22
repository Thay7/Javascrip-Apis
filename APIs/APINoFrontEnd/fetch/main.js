//com o fetch traremos para dentro do projeto o que está retornando no navegador do projeto node-api-discover/server.js
//metodo GET

const { application } = require("express")
const { json } = require("stream/consumers")

const url = "http://localhost:5500/api"

function getUsers() {

    fetch(url) //passando o conteudo da url para o fetch
        .then(response => response.json()) //pegando o conteudo da url e transformando no formato json
        //a arow function acima responde o conteudo da url e joga dentro do data abaixo, pois está dentro de um then em seguida. 
        .then(data => renderApiResult.textContent = JSON.stringify(data)) //chamando o renderApiResult e atribuindo o data a ele (usando o JSON.stringfy pq se nao, nao renderiza)
        .catch(error => conosole.error(error)) //console.error serve pra gente ver o erro no console do navegador
}

function getUser() {

    fetch(`${url}/1`) //passando o id 1 na url
        .then(response => response.json())
        .then(data => {

            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar

        })
        .catch(error => console.error(error))

}

//com o fetch podemos também conseguimos mandar conteudo
//metodo POST
function addUser(newUser) {

    fetch(url, { //fetch aceita como argumento da função objetos

        method: "POST", //get é o metodo padrão, passamos aqui por que usaremos o POST
        //body é onde colocamos o que vai ser enviado para a url
        body: JSON.stringify(newUser), //transformando o conteudo que será enviado em JSON
        headers: { //headers são padrão
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error)) //valida erro do then funcionar ou não, não erros da api
}

const newUser = {
    name: "Olivia Zars",
    avatar: "http://picsum.photos/200/300",
    city: "Rio do Sul"
}

addUser(newUser)

//metodo PUT - alterar informações
function updateUser(updatedUser) {

    //passando o ID na url por que a API foi configurada dessa forma
    fetch(`${url}/1`, { //o fetch espera de segundo argumento, um objeto

        method: "PUT",
        body: JSON.stringify(updatedUser), //JSON.stringify tranforma em texto simples, mantendo a estrutura de objeto
        headers: {
            "Content-type": "application/json; charsert=UTF-8"
        }

    })
        .then(response => response.json()) //transformando em JSON para o codigo entender
        .then(data => alertApi.textContent = data) //pegando o conteudo do then de cima e guardando numa variavel que chamei de data
        .catch(error => console.error(error))
}

const updatedUser = {

    name: "Thay",
    avatar: "https://picsum.photos/200/300",
    city: "Pau dos Ferros"
}

//metodo DELETE
function deleteUser(id) {

    fetch(`${url}/${id}`, {

        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data) //modificando a mensagem que irá aparecer no html pegando pelo ir alertApi
        .catch(error => console.error(error))

}

deleteUser(5)

//updateUser(updatedUser)

getUsers()
getUser()


