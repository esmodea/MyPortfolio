import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import Overall from './Overall';
import Projects from './Projects';
import Data from './resumeData';
import './resume.css'

const ResumePage = () => {

    return(
        <>
            <div className='page-container' >
                <NavBar/>
                <div className='resume-container'>
                    <Overall />
                    {Data.map(({title, content}) => {
                        return <Projects title={title} content={content} />
                    })}
                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ResumePage