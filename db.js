const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
//Criar a tabela 
        db.run(`
            CREATE TABLE IF NOT EXISTS ideas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                img TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                url TEXT
            );
        `)


//Inserir dados na tabela
/*
    const query = `
    INSERT INTO ideas(
        img,
        title,
        category,
        description,
        url
    ) VALUES (?,?,?,?,?);`

    const values = [
        "https://image.flaticon.com/icons/svg/2780/2780096.svg",
        "Exercicios",
        "Saúde",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam soluta beatae labore accusamus pariatur. Nobis adipisci, ullam laborum ducimus aspernatur consequuntur non.",
        "https://github.com/Lucas-Lameira"
    ]
    
        db.run(query, values, function(err){
            if(err) return console.log(err)

            console.log(this)
        })
    */

//Consultar dados na tabela
/*
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)

        console.log(rows)
    })

*/

//Deletar um dado na tabela
/*
    db.run(`DELETE FROM ideas WHERE id = ?`, [//passar o id], function(err){
        if(err) return console.log(err)

        console.log("DELETADO", this)
    })
*/

})

module.exports = db
