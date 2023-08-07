import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Navbar(props) {
    const handleLightColor = () => {
        props.toggleMode("light");
    }

    const handlePrimaryColor = () => {
        props.toggleMode("primary");
    }

    const handleDengerColor = () => {
        props.toggleMode("danger");
    }

    const handleWarningColor = () => {
        props.toggleMode("warning");
    }

    const handleSuccessColor = () => {
        props.toggleMode("success");
    }

    const handleInfoColor = () => {
        props.toggleMode("info");
    }
    
    const handleSecondaryColor = () => {
        props.toggleMode("secondary");
    }

    const handleDarkColor = () => {
        props.toggleMode("dark");
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode==="light"?"light":"dark"} bg-${props.mode}`}>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} d-flex `}>
                        <div className='color-palate'>
                            <div onClick={handleLightColor} className="mx-1 border border-1 border-black bg-light"></div>
                            <div onClick={handlePrimaryColor} className="mx-1 border border-1 border-black bg-primary"></div>
                            <div onClick={handleDengerColor} className="mx-1 border border-1 border-black bg-danger"></div>
                            <div onClick={handleWarningColor} className="mx-1 border border-1 border-black bg-warning"></div>
                            <div onClick={handleSuccessColor} className="mx-1 border border-1 border-black bg-success"></div>
                            <div onClick={handleInfoColor} className="mx-1 border border-1 border-black bg-info"></div>
                            <div onClick={handleSecondaryColor} className="mx-1 border border-1 border-black bg-secondary"></div>
                            <div onClick={handleDarkColor} className="mx-1 border border-1 border-black bg-dark"></div>
                        </div>
                        {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
                        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{ props.modeTitle}</label> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
} 

Navbar.defaultProps = {
    title: "Set title here"
}