import React from "react";
import NavBar from "../common/NavBar";
import Welcome from './Welcome';
import CodeExperience from "./CodeExperience";

const AboutPage = () => {
    return (
        <>
            <div className="page-container">
                <NavBar />
                <Welcome />
                <CodeExperience /> 
            </div>
        </>
    )
}

export default AboutPage;