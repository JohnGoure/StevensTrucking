import React from 'react';
import img from '../../assets/images/logo.png'

const footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <img src={img} alt="logo"></img>
                <h1>9757 Military Pkwy, Dallas, TX 75227</h1>
            </div>
            <div className="footer-nav">
            <h3>ACCOUNT</h3>
            <nav>
                <ul>
                    <li><a>Login</a></li>
                    <li><a>Create Account</a></li>
                </ul>
            </nav>
            </div>
        </div>
        <div className="copywright">
            <p>Copyright 2018 Stevens Transport. All Rights Reserved. <a>Privacy Policy.</a> <a>Terms & Conditions.</a></p>
        </div>
        </footer>
    )
}

export default footer;