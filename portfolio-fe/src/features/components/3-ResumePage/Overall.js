import React from "react";
import Title from './Title';
import Text from './Text';
import { Link } from 'react-router-dom';

const Overall = () => {
    const copyText = (string) => {
        navigator.clipboard.writeText(string)
    }

    return (
        <>
            <Title text={'Full Stack Web Developer | Software Engineer'} className={'job-title'} />
            <p className='contact-info'>Arlington, TX | 
                <button className='bold-link' onClick={() => copyText('682-564-2938')}> 682-564-2938</button> | 
                <button className='bold-link' onClick={() => copyText('esmodearburk@gmail.com')}> esmodearburk@gmail.com</button> | 
                <Link className='bold-link' to={'https://github.com/esmodea'} target={'_blank'} > GitHub</Link> | 
                <Link className='bold-link' to={'https://www.linkedin.com/in/esmodea-burk/'} target={'_blank'} > LinkedIn</Link>
            </p>
            <Title text={'Technical Skills'} className={'underlined'} />
            <div className="horizontal">
            <p className="bold">Front End: </p><Text className={'text'} text={'React.js, React Testing Library, Redux, Hooks, Reducers, Context API, Jest, Cypress, Axios, JavaScript, HTML, CSS'} />
            </div>
            <div className="horizontal">
            <p className="bold">Back End: </p><Text className={'text'} text={'Node.Js, Express, SQL, Git CLI, GitHub, VSCode, Vercel, Heroku'} />
            </div>
            <div className="horizontal">
            <p className="bold">Additional Skills: </p><Text className={'text'} text={'Agile Project Management, Algorithms, Architecture, Debugging, Deployment'} />
            </div>
        </>
    )
}

export default Overall;