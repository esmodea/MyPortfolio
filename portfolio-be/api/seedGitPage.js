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
    
    con.query(`INSERT INTO main.gitData (icon, text, href, userID) VALUES ('../../assets/MyGithubIcons/github-mark.svg', 'You can see all of the documentation for this site at my GitHub by clicking on the icon to the left. You might see that I have a great skill when it comes to commit titles and git management. Warning, some of the below examples are rudimentary and old.', 'https://github.com/esmodea/MyPortfolio', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.gitData (icon, text, href, userID) VALUES ('../../assets/MyGithubIcons/Figma-Logo.png', 'On the right is a link to my Figma where you can see the effort I spent designing this site. Below here is multiple previous noteworthy sites that I’ve built in the past.', 'https://www.figma.com/file/MQHND4jGeub72LRDy3ggAg/Portfolio-Design?node-id=0%3A1&t=OvcpksRYvVM2l2pt-1', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.gitData (icon, text, href, userID) VALUES ('../../assets/MyGithubIcons/State.jpg', 'This is a site that I didn’t design, the link goes to a copy of the site for an example. While I did not build that copy I have coded this site from the ground up as part of my education at BloomTech.', 'https://advanced-state-wheel.herokuapp.com/', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.gitData (icon, text, href, userID) VALUES ('../../assets/MyGithubIcons/RPS.jpg', 'Here is my first real JavaScript application. I keep it here because I remember it fondly.', 'https://esmodea.github.io/RockPaperScissors/', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.gitData (icon, text, href, userID) VALUES ('../../assets/MyGithubIcons/Etch-A-Sketch.jpg', 'This one is a neat little Etch-A-Sketch tool that lets you choose the canvas size. It darkens each pixel by a certain amount upon mouse over.', 'https://esmodea.github.io/Etch-A-Sketch/', 1)`, (err, result, fields) => {
        console.log(result);
    })
})