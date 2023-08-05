const mysql = require('mysql');
require('dotenv/config')

const [host, password] = [process.env.DB_ENDPOINT, process.env.DB_PASSWORD];

const pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: "ADMIN",
    password: password
});

console.log(host, password);

pool.getConnection((err, con) => {
    if(err)throw err;
    con.query('CREATE DATABASE IF NOT EXISTS main;');
    con.query('USE main;');
    con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(50), email varchar(150), company varchar(50), isRecruiter binary, PRIMARY KEY(id))', function(error, result, fields) {
        console.log(result);
    });
    con.query('CREATE TABLE IF NOT EXISTS resumeData(id int NOT NULL AUTO_INCREMENT, title varchar(40), userID int NOT NULL, PRIMARY KEY(id), FOREIGN KEY(userID) REFERENCES users(id))', function(error, result, fields) {
        console.log(result);
    });
    con.query('CREATE TABLE IF NOT EXISTS resumeContent(contentID int NOT NULL AUTO_INCREMENT, titleID int NOT NULL, smallTitle varchar(255), github varchar(255), website varchar(255), PRIMARY KEY(contentID), FOREIGN KEY(titleID) REFERENCES resumeData(id))', function(error, result, fields) {
        console.log(error);
        console.log(result);
    });
    con.query('CREATE TABLE IF NOT EXISTS resumeText(textID int NOT NULL AUTO_INCREMENT, contentID int NOT NULL, text varchar(5000), PRIMARY KEY(textID), FOREIGN KEY(contentID) REFERENCES resumeContent(contentID))', function(error, result, fields) {
        console.log(error)
        console.log(result);
    });
    con.query('CREATE TABLE IF NOT EXISTS gitData(id int NOT NULL AUTO_INCREMENT, icon varchar(300), text varchar(1000), href varchar(300), userID int NOT NULL, PRIMARY KEY(id), FOREIGN KEY(userID) REFERENCES users(id))', function(error, result, fields) {
        console.log(result);
    });
    con.query('CREATE TABLE IF NOT EXISTS toolsTypes(id int NOT NULL AUTO_INCREMENT, type varchar(50), userID int NOT NULL, PRIMARY KEY(id), FOREIGN KEY(userID) REFERENCES users(id))', function(error, result, fields) {
        console.log(result);
    });
    con.query('CREATE TABLE IF NOT EXISTS toolsData(id int NOT NULL AUTO_INCREMENT, typeID int NOT NULL, text varchar(5000), icon varchar(300), PRIMARY KEY(id), FOREIGN KEY(typeID) REFERENCES toolsTypes(id))', function(error, result, fields) {
        console.log(result);
    });
    con.query('CREATE TABLE IF NOT EXISTS myJobTitles(id int NOT NULL AUTO_INCREMENT, title carchar(20), PRIMARY KEY(id))', function(error, result, fields) {
        console.log(error, result);
    });
})
