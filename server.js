//Criação e configuração do servidor com o express
const express = require("express")
const server = express()


//config nunjucks
//viwes é o nome da pasta q contém os html
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express:server,
    noCache: true, //ddesabilitar o cache no desenvolvimento
})

//config de arquivos estaticos(css, js, image)
server.use(express.static("public"))


//colecoes de ideias 
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2463/2463510.svg",
        title:"Cursos de programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam soluta beatae labore accusamus pariatur. Nobis adipisci, ullam laborum ducimus aspernatur consequuntur non.",
        url: "https://github.com/Lucas-Lameira"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2784/2784620.svg",
        title:"Música",
        category:"Lazer",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam soluta beatae labore accusamus pariatur. Nobis adipisci, ullam laborum ducimus aspernatur consequuntur non.",
        url:"https://github.com/Lucas-Lameira"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2780/2780096.svg",
        title:"Exercicios",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam soluta beatae labore accusamus pariatur. Nobis adipisci, ullam laborum ducimus aspernatur consequuntur non.",
        url:"https://github.com/Lucas-Lameira"
    },
    {
        img:"https://www.flaticon.com/premium-icon/icons/svg/2790/2790316.svg",
        title:"Games",
        category:"Lazer",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam soluta beatae labore accusamus pariatur. Nobis adipisci, ullam laborum ducimus aspernatur consequuntur non.",
        url:"https://github.com/Lucas-Lameira"
    }
]



//rotas
server.get("/", function(request , response){

    let frontIdea = []
    for (let idea of ideas){
        if(frontIdea.length < 3){
            frontIdea.push(idea)
        }
    }

    return response.render("index.html", {ideas: frontIdea} )//mandar o array ideas para a home 
})

server.get("/ideias", function(request , response){


    return response.render("ideias.html", {ideas})
})

//Servidor na porta 3000
server.listen(3000)