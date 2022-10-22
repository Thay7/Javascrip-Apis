const url = "https://localhost:5500/api"

function getUsers() {

    axios.get(url)
        .then(response => {
            //pegando pela DOM o textContent do obejto html que tem o id apiResult
            apiResult.textContent = JSON.stringify(response.data) //transformando em texto simples pro navegador conseguir ler
        })
        .catch(error => console.error(error))
}

//metodo POST
//pega dados e envia para a api

function addNewUser() {

    axios.post(url, {
        "name": "Thay",
        "avatar": "https://picsum.photos/200/300",
        "city": "Pau dos Ferros"
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))

}

getUsers()
addNewUser()