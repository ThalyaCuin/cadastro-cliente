(async() =>{
    const db = require('./db')
    
    console.log('SELECT * FROM usuario;');
    const usuarios = await db.selectusuario();
    console.log(usuarios);



    console.log('INSERT INTO USUARIO');

    const result = await db.insertusuario({nome: "Tatah", senha: "meu coracao"});

    console.log(result);



    console.log('DELETE FROM usuario');

    const result3 = await db.deleteusuario(2);

    console.log(result3);



    console.log('UPDATE USUARIO');

    const result2 = await db.updateusuario(3, {nome: "Tatah my amore", senha:"meucoracaoedela"});

    console.log(result2);
})();