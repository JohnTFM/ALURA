import mysql from 'mysql2';


const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user : 'root',
    password: 'hotwheels',
    database: 'joao',
})
connection.query('CREATE DATABASE IF NOT EXISTS UniRent');
connection.query('USE unirent');
connection.query('CREATE TABLE IF NOT EXISTS cadastro(nome varchar(100), idade int, endereco varchar(50))');
export const consultarLocatarios = async  function  (){
    connection.query('USE UniRent')
    return connection.promise().query('Select * from Cadastro');


}
export const inserirLocatario = async function (nome: string){
    connection.query('Use UniRent');

    connection.query(`INSERT INTO cadastro values("${nome}", "19", "Rua SG-02")`);
}


