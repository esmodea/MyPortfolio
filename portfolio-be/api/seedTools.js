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
    
    con.query(`INSERT INTO main.toolsTypes (type, userID) VALUES ('frontEnd', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsTypes (type, userID) VALUES ('backEnd', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsTypes (type, userID) VALUES ('essentials', 1)`, (err, result, fields) => {
        console.log(result);
    })

    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('React was hard at first but now it feels like typing English to me. I find it so easy to conceptualize web layouts through the component architecture of React that I oftentimes find myself finishing way faster than I expected to.', '../../assets/ToolsIcons/react.png', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('React Router is a godsend. It’s history functionality and the way it allows quick and easy compartmentalization of url structure is like a chef’s kiss. I wouldn’t make a React project without it and I certainly won’t stop using it any time soon.', '../../assets/ToolsIcons/router.png', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('Redux is so useful and saves me so much heartache from never needing to prop drill again. With the addition of redux toolkit on my belt more recently, this has become the easy go-to for state management and data flow. Very fast, not very wordy, redux has my back.', '../../assets/ToolsIcons/redux.png', 1)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('Axios is something I have worked hard to understand and utilize. Conceptualizing RESTful architecture and how to make calls to an API within that structure was difficult at first but now I manage. Axios really makes a lot of that easier.', '../../assets/ToolsIcons/axios.png', 1)`, (err, result, fields) => {
        console.log(result);
    })
    
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('SQL is something I’ve not had to work in a whole lot, but I know the syntax, I know the industry standard for usage and I’ve even used it to build the API for the back-end of the comments section on the “What I can do” page.', '../../assets/ToolsIcons/sql.png', 2)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('ExpressJs I’m more comfortable in than most of the required back-end software. I’ve not dabbled too much in Java so Express is my go-to for the time being until I can find the time to really dive into Java and get things set up that way.', '../../assets/ToolsIcons/express.png', 2)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('NodeJs is like an old friend to me. I used to run Linux as my daily driver for my computer and I did so much through NodeJs during that time of my life. It’s the same reason I find it so easy to use the GitBash terminal. ', '../../assets/ToolsIcons/node.png', 2)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('Speaking of GitBash, I’m proud to use Git and Github to facilitate my version control system for even this very site! You can find all of the documentation for this site on the My Github page and see for yourself my commit history and also see my Figma all in one place.', '../../assets/ToolsIcons/git.png', 2)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('VSCode is my favorite coding software. It has such good integration with git and I even have my GitBash running through the VSC terminal. I highly recommend it to anyone who hasn’t used it (not that any experienced programmer hasn’t). The color coding helps so much and the customization and sheer volume of language plug-ins is a must.', '../../assets/ToolsIcons/vsc.png', 2)`, (err, result, fields) => {
        console.log(result);
    })

    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('I have quite a few year’s experience with HTML, learned the basics in High School and still have a solid grasp. Even though most of the work I do now is in JSX, it’s still a great tool that I’m quite familiar with.', '../../assets/ToolsIcons/html.png', 3)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('CSS is the problem child (seems that way for most) but me and this language have a certain understanding. I can get most things done in css without issue. Sometimes however I just have to rely on libraries like Ant Design to get things done without strain.', '../../assets/ToolsIcons/css.png', 3)`, (err, result, fields) => {
        console.log(result);
    })
    con.query(`INSERT INTO main.toolsData (text, icon, typeID) VALUES ('This is my favorite tool. JavaScript is my safe-space. If it’s Object oriented then I’m ready for it. If you need functionality in your application, I can make it happen with this tool. Him an I are best friends.', '../../assets/ToolsIcons/js.png', 3)`, (err, result, fields) => {
        console.log(result);
    })
})