import React from 'react';

const nav = (props) => {

    const navStyle = {}

    if (props.open) {
        navStyle = {
            height: "20px"
        }
    } else {
        navStyle = {
            height: "0px"
        }
    }

    return (
        <nav style={navStyle}>
                <ul className="hidden">
                    <li>
                        <a href="login">Login</a>
                    </li>
                    <li>
                        <a href="create-account">Create Account</a>
                    </li>
                </ul>
            </nav>
    )
};

export default nav;