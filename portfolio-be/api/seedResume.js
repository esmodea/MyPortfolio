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
    
    con.query(`INSERT INTO main.resumeData (title, userID) VALUES ('Bloomtech Projects', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeData (title, userID) VALUES ('Odin Projects', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeData (title, userID) VALUES ('Education', 1)`, (err, result, fields) => {
        console.log(result);
    })

    con.query(`INSERT INTO main.resumeContent (smallTitle, github, titleID) VALUES ('Web-Module-Project-Redux (Full Stack Developer) - React | Node | Redux', 'https://github.com/esmodea/web-module-project-redux', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeContent (smallTitle, github, website, titleID) VALUES ('Advanced-State Challenge (Full Stack Developer) - React | Node', 'https://github.com/esmodea/web-sprint-challenge-advanced-state', 'https://advanced-state-wheel.herokuapp.com/', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeContent (smallTitle, github, titleID) VALUES ('Adding-Data-Persistence Challenge (Full Stack Developer) - Express.js | Node', 'https://github.com/esmodea/web-sprint-challenge-adding-data-persistence', 1)`, (err, result, fields) => {
        console.log(result);
    })

    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (1, 'Modified a single page application so it works with React-Redux to handle stateful components so that the functionality can be used from any component on the page')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (1, 'Wrote functionality to delete and add new movies from the movie list using a reducer function to keep the state immutable')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (2, 'Created the functionality on a website with React.js to match a stateful single page example application using React Router and best practices')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (2, 'Included components and stateful code to track the position of items on the page using React Redux to handle state')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (3, 'Coded endpoints for a rudimentary SQLite database in Express.js to allow RESTful API interaction via http requests')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (3, 'Created a migrations file to allow rollbacks and new migrations to the database schema for potential future updates to data structure')`, (err, result) => {
        console.log(result);
    })

    con.query(`INSERT INTO main.resumeContent (smallTitle, github, website, titleID) VALUES ('Odin Project Etch-A-Sketch (Full Stack Developer) - HTML | CSS | JS', 'https://github.com/esmodea/Etch-A-Sketch', 'https://esmodea.github.io/Etch-A-Sketch/', 2)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeContent (smallTitle, github, website, titleID) VALUES ('Odin Project Rock Paper Scissors (Full Stack Developer) - HTML | CSS | JS', 'https://github.com/esmodea/RockPaperScissors', 'https://esmodea.github.io/RockPaperScissors/', 2)`, (err, result, fields) => {
        console.log(result);
    })

    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (4, 'Set up a script to create divs with event listeners so that users can press a button and then hover the mouse over the canvas and create pixel art of various resolutions')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (4, 'Designed a simple UI for the user to interact with the canvas creation and select the resolution with a slider using an HTML form')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (5, 'Coded a program to select rock, paper or scissors with Math.random and compare the answer to the user’s selection using a JavaScript if-then statement')`, (err, result) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeText (contentID, text) VALUES (5, 'Designed the UI in CSS and JavaScript to allow the user to select their choice with a click event-listener attached to a button, and to show a scoreboard and game history')`, (err, result) => {
        console.log(result);
    })

    con.query(`INSERT INTO main.resumeContent (smallTitle, titleID) VALUES ('BloomTech (Lambda School), Graduate, Full Time Program, Full Stack Web Development', 3)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.resumeContent (smallTitle, titleID) VALUES ('The Odin Project, Foundational JavaScript', 3)`, (err, result, fields) => {
        console.log(result);
    })

})