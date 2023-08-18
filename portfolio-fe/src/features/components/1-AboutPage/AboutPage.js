import React from "react";
import NavBar from "../common/NavBar";
import Welcome from './Welcome';
import CodeExperience from "./CodeExperience";
import Footer from '../common/Footer';
import SelfDesc from "./SelfDesc";
import './aboutPage.css';

const AboutPage = () => {
    return (
        <>
            <div className="page-container">
                <Welcome />
                <CodeExperience /> 
                <SelfDesc />
                <Footer />
            </div>
        </>
    )
}

export default AboutPage;