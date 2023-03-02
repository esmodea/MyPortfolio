const mysql = require('mysql');
require('dotenv/config')

const [host, password] = [process.env.DB_ENDPOINT, process.env.DB_PASSWORD];
console.log(host, password)
console.log(process.env)

const pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: "admin",
    password: password
});

console.log(host, password);

pool.getConnection((err, con) => {
    
    con.query(`INSERT INTO main.users (username, email, company, isRecruiter) VALUES ('Esmodea', 'esmodearburk@gmail.com', 'freelance', 0)`, (err, result, fields) => {
        console.log(result);
    })


})