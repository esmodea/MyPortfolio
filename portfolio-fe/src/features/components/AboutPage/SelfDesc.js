import React from 'react';
import selfPhoto from '../../assets/self-photo.png';

const SelfDesc = () => {
    return(
        <>
            <div className='about-content'>
                <article className='article-text'>
                I am a diligent perfection-oriented programmer who knows how to slap a duct-tape style solution to a problem when needed. Being confident in my JavaScript skills took time and much practice but as I’ve been training for the past two years my talent isn’t something I can look down upon. 
                <br /><br />
                I work smart not hard, spend as little time as I can to get a problem solved right, and try to ensure I see any holes in my plans before they’re implemented if I can. I’m never averse to criticism or disagreement. If there’s a better way to do something we should do it, even if it’s not ‘the way I would’. 
                <br /><br />
                I’ve worked alone and in a team to deliver products through my schooling at <a href='https://www.bloomtech.com/' target={'_blank'}>Bloomtech Institute of Technology</a> and have come out of it a better programmer by miles. Learning things like responsive design and RESTful API structure was a breakthrough to me. Especially as I leave Bloomtech I find myself appreciating the moments when I worked together with my team in Labs to finish a PR for the user story we implemented. Teamwork makes the dream work.
                </article>
                <img src={selfPhoto} />
            </div>
        </>
    )
};

export default SelfDesc;