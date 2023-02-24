import html from '../../assets/ToolsIcons/html.png';
import css from '../../assets/ToolsIcons/css.png';
import js from '../../assets/ToolsIcons/js.png';
import react from '../../assets/ToolsIcons/react.png';
import router from '../../assets/ToolsIcons/router.png';
import redux from '../../assets/ToolsIcons/redux.png';
import axios from '../../assets/ToolsIcons/axios.png';
import sql from '../../assets/ToolsIcons/sql.png';
import express from '../../assets/ToolsIcons/express.png';
import node from '../../assets/ToolsIcons/node.png';
import git from '../../assets/ToolsIcons/git.png';
import vsc from '../../assets/ToolsIcons/vsc.png';


const contents = {
    frontEnd: [
        {
            text: 'React was hard at first but now it feels like typing English to me. I find it so easy to conceptualize web layouts through the component architecture of React that I oftentimes find myself finishing way faster than I expected to.',
            icon: react
        },
        {
            text: 'React Router is a godsend. It’s history functionality and the way it allows quick and easy compartmentalization of url structure is like a chef’s kiss. I wouldn’t make a React project without it and I certainly won’t stop using it any time soon.',
            icon: router
        },
        {
            text: 'Redux is so useful and saves me so much heartache from never needing to prop drill again. With the addition of redux toolkit on my belt more recently, this has become the easy go-to for state management and data flow. Very fast, not very wordy, redux has my back.',
            icon: redux
        },
        {
            text: 'Axios is something I have worked hard to understand and utilize. Conceptualizing RESTful architecture and how to make calls to an API within that structure was difficult at first but now I manage. Axios really makes a lot of that easier.',
            icon: axios
        },
    ],
    backEnd: [
        {
            text: 'SQL is something I’ve not had to work in a whole lot, but I know the syntax, I know the industry standard for usage and I’ve even used it to build the API for the back-end of the comments section on the “What I can do” page.',
            icon: sql
        },
        {
            text: 'ExpressJs I’m more comfortable in than most of the required back-end software. I’ve not dabbled too much in Java so Express is my go-to for the time being until I can find the time to really dive into Java and get things set up that way. ',
            icon: express
        },
        {
            text: 'NodeJs is like an old friend to me. I used to run Linux as my daily driver for my computer and I did so much through NodeJs during that time of my life. It’s the same reason I find it so easy to use the GitBash terminal. ',
            icon: node
        },
        {
            text: 'Speaking of GitBash, I’m proud to use Git and Github to facilitate my version control system for even this very site! You can find all of the documentation for this site on the My Github page and see for yourself my commit history and also see my Figma all in one place. ',
            icon: git
        },
        {
            text: 'VSCode is my favorite coding software. It has such good integration with git and I even have my GitBash running through the VSC terminal. I highly recommend it to anyone who hasn’t used it (not that any experienced programmer hasn’t). The color coding helps so much and the customization and sheer volume of language plug-ins is a must.',
            icon: vsc
        },
    ],
    essentials: [
        {
            text: 'I have quite a few year’s experience with HTML, learned the basics in High School and still have a solid grasp. Even though most of the work I do now is in JSX, it’s still a great tool that I’m quite familiar with.',
            icon: html
        },
        {
            text: 'CSS is the problem child (seems that way for most) but me and this language have a certain understanding. I can get most things done in css without issue. Sometimes however I just have to rely on libraries like Ant Design to get things done without strain.',
            icon: css
        },
        {
            text: 'This is my favorite tool. JavaScript is my safe-space. If it’s Object oriented then I’m ready for it. If you need functionality in your application, I can make it happen with this tool. Him an I are best friends.',
            icon: js
        },
    ]
}

export default contents;