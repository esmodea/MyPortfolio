import React from "react";
import {ArrowDownOutlined} from '@ant-design/icons'
import { useEffect, useState } from "react";


const CodeExperience = () => {
    const [display, setDisplay] = useState({animationName: 'float', animationIterationCount: 'infinite'});

    useEffect(() => {
        window.onscroll = () => {setDisplay({animationName: 'leave', animationIterationCount: 1})};
    }, [])
    return (
        <>
            <div className="scroll" style={display}>
                <p className="scroll-text" style={display}>scroll for more!</p>
                <ArrowDownOutlined className="scroll-icon" />
            </div>
            <div className="code-content-bg-top">
                <div className="code-content-bg-bottom">
                    <div className="code-content">
                        <div>
                            <article className="article-text light">
                                I have a deep understanding of Object Oriented Programming. Being extremely comfortable with JavaScript, I find I’m quite capable of following data from component to component in a React based codebase. 
                                <br/><br/>
                                This is an obviously important skill when it comes to things like prop drilling and redux state flow.
                                <br/><br/>
                                (Did I mention I have experience with Redux Toolkit?)
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeExperience