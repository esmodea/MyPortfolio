import React from "react";
import Title from "./Title";
import Text from "./Text";
import { Link } from "react-router-dom";

const Projects = ({title, content}) => {
    return (
        <>
            <Title className={'underlined'} text={title} />
            {content.map(({smallTitle, text, github, website}) => {
                return (
                    <div className="project">
                        <div className="title-div">
                            <Title className={'small-title'} text={smallTitle} />
                            {github ? <Link className="button" target={'_blank'} to={github}>Github</Link>: ''}
                            {website ? <Link className="button" target={'_blank'} to={website}>Website</Link>: ''}
                        </div>
                        {text ? text.map((text) => {
                            return(
                                <Text className={'text'} text={text} />
                            )
                        }) : <></>}
                    </div>
                )
            })}
        </>
    )
};

export default Projects;