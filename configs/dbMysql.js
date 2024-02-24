const mysql = require('mysql');
require('dotenv').config();

// const dbHost = process.env.DB_HOST;
// const dbUser = process.env.DB_USER;
// const dbPassword = process.env.DB_PASSWORD;
// const dbName = process.env.DB_NAME;
// const dbPort = process.env.DB_PORT;

const dbHost = "15.235.154.180";
const dbUser = "travelan_andamantur-db";
const dbPassword = "Han_0647526359";
const dbName = "travelan_andamantur-db";
const dbPort = "3306";

//Mysql Connect
const conn = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort
})

conn.connect((err) => {
    if(err){
        console.log(`Error connect to Mysql => ${err}`)
        return;
    }
    console.log('Mysql successfully connect')
})


module.exports = conn;