import React from "react";
import NavBar from "../common/NavBar";
import Welcome from './Welcome';

const LandingPage = () => {
    return (
        <>
            <div className="page-container">
                <NavBar />
                <Welcome />
            </div>
        </>
    )
}

export default LandingPage;