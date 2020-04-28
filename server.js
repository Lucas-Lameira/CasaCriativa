//Criação e configuração do servidor com o express
const express = require("express")
const server = express()
const db = require("./db")

//config de arquivos estaticos(css, js, image)
server.use(express.static("public"))
server.use(express.urlencoded({extended: true}))//habilitar o request.body

//config nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {//viwes é o nome da pasta q contém os html
    express:server,
    noCache: true, //ddesabilitar o cache no desenvolvimento
})

//rotas
server.get("/", function(request , response){
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err){
            console.log(err)
            return response.send("ERRO NO BANCO DE DADOS")
        }

        let frontIdea = []
        for (let idea of rows){
            if(frontIdea.length < 3){
                frontIdea.push(idea)
            }
        }

        return response.render("index.html", {ideas: frontIdea} )//mandar o array ideas para a home 
    })

})

server.get("/ideias", function(request , response){ 

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err){
            console.log(err)
            return response.send("ERRO NO BANCO DE DADOS")
        } 

        const ideas = [...rows]

        return response.render("ideias.html", {ideas})
    })
})

server.post("/", function(request, response){
//Inserir dados na tabela
    const query = `
        INSERT INTO ideas(
            img,
            title,
            category,
            description,
            url
        ) VALUES (?,?,?,?,?);`

    const values = [
        request.body.img,
        request.body.title,
        request.body.category,
        request.body.description,
        request.body.url,
    ]
    
        db.run(query, values, function(err){
            if(err){
                console.log(err)
                return response.send("ERRO NO BANCO DE DADOS")
            } 

            return response.redirect("/ideias")
        })
})

//Servidor na porta 3000
server.listen(3000)
