import React from "react";
import NavBar from "../common/NavBar";
import Welcome from './Welcome';
import CodeExperience from "./CodeExperience";
import Footer from '../common/Footer';

const AboutPage = () => {
    return (
        <>
            <div className="page-container">
                <NavBar />
                <Welcome />
                <CodeExperience /> 
                <Footer />
            </div>
        </>
    )
}

export default AboutPage;