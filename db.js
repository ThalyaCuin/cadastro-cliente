async function connect(){

    if(globalThis.connect && global.connection.state !== 'disconnected')

    return global.connection;



    const mysql = require("mysql2/promise");

    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/webii");

    console.log("Conectou no MySQL");

    global.connection = connection;

    return connection;

}

async function selectusuario(){

    const conn = await connect();

    const [rows] = await conn.query('SELECT * FROM usuario;');

    return rows;

}
async function insertusuario(usuario){

    const conn = await connect();

    const sql = 'INSERT INTO usuario(nome,senha) VALUES (?,?);';

    const values = [usuario.nome, usuario.senha];

    return await conn.query(sql,values);

}


async function deleteusuario(id){

    const conn = await connect();

    const sql = 'DELETE FROM usuario where id=?;';

    return await conn.query(sql, [id]);

}


async function updateusuario(id, usuario){

    const conn = await connect();

    const sql = 'UPDATE usuario SET nome=?, senha=? where id=?';

    const values = [usuario.nome, usuario.senha, id];

    return await conn.query(sql, values);

}

module.exports = {selectusuario, insertusuario, deleteusuario, updateusuario}