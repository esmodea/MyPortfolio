const express = require('express');
const cors = require('cors')
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

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

app.get('/user', (req, res) => {
    if(req.query.id) {
        pool.getConnection((err, con) => {
            con.connect(function(err) {
                con.query(`SELECT username, email, company, CONVERT(isRecruiter using utf8) as isRecruiter, recruitingFor, about FROM main.users WHERE id = ${req.query.id}`, function(err, result, fields) {
                    if (err) res.send(err);
                    if (result) res.send(result);
                });
            })
            con.release();  
        })
        pool.removeAllListeners();
    }
});

app.get('/users-email', (req, res) => {
    if ( req.query.email ) {
        pool.getConnection((err, con) => {
            con.connect((err) => {
                let emailExists = false;
                con.query(`GET FROM main.users WHERE email = ${req.query.email}`, (err, result, fields) => {
                    if(err) res.send(err);
                    if (result) emailExists = !!result;
                })
                if(emailExists)con.query(`SELECT id FROM main.users WHERE email = ${req.query.email}`, (err, result, fields) => {
                    if (err) res.send(err);
                    if (result) res.send({id: result[0].id});
                    if (fields) console.log(fields);
                })
            })
            con.release();  
        })
        pool.removeAllListeners();
    }
})

app.get('/resume', (req, res) => {
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

app.delete('/delete-user', (req, res) => {
        pool.getConnection((err, con) => {
            if(req.query.id){
                con.connect((err) => {
                    let isInDatabase = false;
                    con.query(`GET FROM main.users WHERE id = ${req.query.id}`, (err, result)=> {
                        if(result) isInDatabase = !!result
                    })
                    if(isInDatabase)con.query(`DELETE FROM main.users WHERE id = ${req.query.id}`, (err, result)=> {
                        if(err) res.send(err)
                        if(result) res.send(result)
                    });
                });
                con.release();
            }
        });
        pool.removeAllListeners();
})

app.post('/add-user', (req, res) => {
    
})

app.listen(8000, () => {console.log('Running on port 8000!')})
