import React, { Component } from 'react';
import img from '../../assets/images/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked(e) {
        console.log(this.state.toggle)
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <header className="header">
                <a id="logo" href="#"><img src={img} alt="logo"></img></a>
                <div className="container">
                    <div id="nav-icon1" onClick={this.clicked}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                { this.state.toggle ? 
                <div className="drop-down-content">
                <nav>
                    <ul>
                        <li><div id="login"><a href="#">Login</a></div></li>
                        <li><div id="create-account"><a href="#">Create Account</a></div></li> 
                    </ul>
                </nav>
            </div> :
            ""
                }
                
            </header>
        )
    }
};

export default Header;