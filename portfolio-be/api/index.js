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


app.get('/users', (req, res) => {
    if(req.query.id) {
        pool.getConnection((err, con) => {
            con.connect(function(err) {
                con.query(`SELECT * FROM main.users WHERE id = ${req.query.id}`, function(err, result, fields) {
                    if (err) res.send(err);
                    if (result) res.send(result);
                });
            });
            con.release();
        });
        pool.removeAllListeners();
    }
});

app.post('/users', (req, res) => {
    if ( req.query.username && req.query.email) {
        console.log('Request recieved');
        pool.getConnection((err, con) => {
            con.connect((err)=> {
                con.query(`INSERT INTO main.users (username, email) VALUES ('${req.query.username}', '${req.query.email}')`, (err, result, fields) => {
                    if (err) res.send(err);
                    if (result) res.send({username: req.query.username, email: req.query.email, age: req.query.age});
                    if (fields) console.log(fields);
                });
            });
            con.release()
        })
        pool.removeAllListeners();
    } else {
        console.log('Missing a parameter');
    };
});

app.put('/users', (req, res) => {
    if ( req.query.id && req.query.username && req.query.email && req.query.company && req.query.isRecruiter && req.query.recruitingFor && req.query.about ){
        pool.getConnection((err, con) => {
            con.connect((err) => {
                con.query(`UPDATE main.users SET username = ${req.query.username}, email = ${req.query.email}, company = ${req.query.company}, isRecruiter = ${req.query.isRecruiter}, recruitingFor = ${req.query.recruitingFor}, about = ${req.query.about} WHERE id = ${req.query.id}`, (err, result, fields) => {
                    if (err) res.send(err);
                    if (result) res.send({username: req.query.username, email: req.query.email, company: req.query.company, isRecruiter: req.query.isRecruiter, recruitingFor: req.query.recruitingFor, about: req.query.about});
                    if (fields) console.log(fields);
                })
            })
        })
    }
})

app.get('/users-email', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    if ( req.query.email ) {
        pool.getConnection((err, con) => {
            con.connect((err) => {
                con.query(`SELECT id FROM main.users WHERE email = ${req.query.email}`, (err, result, fields) => {
                    if (err) res.send(err);
                    if (result) res.send({id: result[0].id});
                    if (fields) console.log(fields);
                })
            })
        })
    }
})

app.get('/resume', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    pool.getConnection((err, con) => {
        con.connect((err) => {
            con.query(`SELECT id, Content.contentID, Text.textID, title, smallTitle, github, website, text FROM main.resumeData as Data LEFT JOIN main.resumeContent as Content ON Data.id = Content.titleID LEFT JOIN main.resumeText as Text ON Content.contentID = Text.contentID ORDER BY Data.id, Content.contentID, Text.textID ASC`, (err, result, fields) => {
                // console.log(err, result, fields)
                if (err) res.send(err);
                if (result) res.send(result);
            })
        });
        con.release();
    })
    pool.removeAllListeners();
});

app.get('/github', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    pool.getConnection((err, con) => {
        con.connect((err) => {
            con.query(`SELECT icon, text, href FROM main.gitData as Data`, (err, result, fields) => {
                console.log(err, result, fields)
                if (err) res.send(err);
                if (result) res.send(result);
            })
        });
        con.release();
    })
    pool.removeAllListeners();
});

app.get('/tools', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    pool.getConnection((err, con) => {
        con.connect((err) => {
            con.query(`SELECT Data.id, Types.id as typeID, type, text, icon FROM main.toolsTypes as Types LEFT JOIN main.toolsData as Data ON Types.id = Data.typeID`, (err, result, fields) => {
                console.log(err, result, fields)
                if (err) res.send(err);
                if (result) res.send(result);
            })
        });
        con.release();
    })
    pool.removeAllListeners();
})

app.delete('/users', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    if(req.query.id){
        pool.getConnection((err, con) => {
            con.connect((err) => {
                con.query(`DELETE FROM main.users WHERE id = ${req.query.id}`, (err, result)=> {
                    if(err) res.send(err)
                    if(result) res.send(result)
                });
            });
            con.release();
        });
        pool.removeAllListeners();
    } else {
        console.log('Missing id')
    }
})

app.listen(8000, () => {console.log('Running on port 8000!')})
