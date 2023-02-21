import React from 'react';
import logo from '../../assets/logo.svg'
import transparency from '../../assets/logo-transparency.png'

const WelcomeTxt = () => {
    return(
        <>
            <div className='welcome-content'>
                <div>
                    <h1 className='welcome-title'>Welcome!</h1>
                    <article className='article-text'>You have arrived at hiring paradise! <br/> <br/> This is my personal website which is fully equipped to show you my design and programming experience built from the ground up.</article>
                </div>
                <div className='welcome-article-bg'>
                    <object data={logo} width={'1000px'} height={'625px'} />
                </div>
            </div>
        </>
    )
}

export default WelcomeTxt