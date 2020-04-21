//Criação e configuração do servidor com o express
const express = require("express")
const server = express()

//config de arquivos estaticos(css, js, image)
server.use(express.static("public"))

//rota
server.get("/", function(request , response){
    return response.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(request , response){
    return response.sendFile(__dirname + "/ideias.html")
})

//Servidor na porta 3000
server.listen(3000)