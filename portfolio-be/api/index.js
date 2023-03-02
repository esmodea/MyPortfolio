const express = require('express');
const mysql = require('mysql');
require('dotenv/config');
const app = express();

const [host, password] = [process.env.DB_ENDPOINT, process.env.DB_PASSWORD];

const pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: "admin",
    password: password
});

app.post('/users', (req, res) => {
    if (req.query.username && req.query.email && req.query.age) {
        console.log('Request recieved');
        pool.getConnection((err, con) => {
            con.connect((err)=> {
                con.query(`INSERT INTO main.users (username, email, age) VALUES ('${req.query.username}', '${req.query.email}', '${req.query.age}')`, (err, result, fields) => {
                    if (err) res.send(err);
                    if (result) res.send({username: req.query.username, email: req.query.email, age: req.query.age});
                    if (fields) console.log(fields);
                });
            });
            con.release()
        })
        
    } else {
        console.log('Missing a parameter');
    };
});

app.get('/users', (req, res) => {
    pool.getConnection((err, con) => {
        con.connect(function(err) {
            con.query(`SELECT * FROM main.users`, function(err, result, fields) {
                if (err) res.send(err);
                if (result) res.send(result);
            });
        });
        con.release();
    });
});

app.get('/resume', (req, res) => {
    pool.getConnection((err, con) => {
        con.connect((err) => {
            con.query(`SELECT title, smallTitle, github, website, text FROM main.resumeData as Data LEFT JOIN main.resumeContent as Content ON Data.id = Content.titleID LEFT JOIN main.resumeText as Text ON Content.contentID = Text.contentID ORDER BY Data.id, Content.contentID, Text.textID ASC`, (err, result, fields) => {
                console.log(err, result, fields)
                if (err) res.send(err);
                if (result) res.send(result);
            })
        });
        con.release();
    })
});

app.get('/github', (req, res) => {
    pool.getConnection((err, con) => {
        con.connect((err) => {
            con.query(`SELECT type, text, icon FROM main.toolsTypes as Types LEFT JOIN main.toolsData as Data ON Types.id = Data.typeID`, (err, result, fields) => {
                console.log(err, result, fields)
                if (err) res.send(err);
                if (result) res.send(result);
            })
        });
        con.release();
    })
});

app.get('/tools', (req, res) => {
    pool.getConnection((err, con) => {
        con.connect((err) => {
            con.query(`SELECT type, text, icon FROM main.toolsTypes as Types LEFT JOIN main.toolsData as Data ON Types.id = Data.typeID`, (err, result, fields) => {
                console.log(err, result, fields)
                if (err) res.send(err);
                if (result) res.send(result);
            })
        });
        con.release();
    })
})

app.delete('/users', (req, res) => {
    if(req.query.id){
        pool.getConnection((err, con) => {
            con.connect((err) => {
                con.query(`DELETE FROM main.users WHERE id=${req.query.id}`, (err, result)=> {
                    if(err) res.send(err)
                    if(result) res.send(result)
                });
            });
            con.release();
        });
    } else {
        console.log('Missing id')
    }
})

app.listen(8000, () => {console.log('Running on port 8000!')})