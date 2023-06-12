
require("dotenv").config();

const mysql_pool = require('mysql2')
const { MongoClient } = require("mongodb");

const connection = mysql_pool.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});


const client = new MongoClient(process.env.URI);

module.exports = {connection, client};