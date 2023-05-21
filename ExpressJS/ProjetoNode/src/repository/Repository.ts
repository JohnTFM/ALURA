import mysql from 'mysql2';


const connection = mysql.createConnection({
    port: 3306,
    host: "joaodbmysql.cmtemn0pxfik.us-east-1.rds.amazonaws.com",
    user : 'root',
    password: 'Sexoanal69',

})
connection.query('CREATE DATABASE IF NOT EXISTS unirent');
connection.query('USE unirent');
connection.query('CREATE TABLE IF NOT EXISTS cadastro(nome varchar(100), idade int, endereco varchar(50), id bigint AUTO_INCREMENT PRIMARY KEY)');
console.log("Conectado");
export const consultarLocatariosConnection = async  function  (){
    connection.query('USE unirent')
    return connection.promise().query('Select * from cadastro');


}
export const inserirLocatario = async function (nome: string){
    connection.query('Use unirent');

    connection.query(`INSERT INTO cadastro(nome, idade, endereco) values("${nome}", "19", "Rua SG-02")`);
}
export const atualizarLocatario = async function (id: number, nome: string){
    connection.query('Use unirent');
    connection.query(`UPDATE cadastro set nome = "${nome}" where id = ${id}`);

}
export const deletarLocatario = async function (id: number){

    connection.query('use unirent');
    connection.query(`delete from cadastro where id = ${id}`);
}


export default connection;

