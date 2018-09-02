import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typograghy from '@material-ui/core/Typography';
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
                <div className="header-card">
                <Link id="logo" to="/"><img src={img} alt="logo"></img></Link>
                <Router>
                    <nav className="inline-nav">
                        <ul>
                            <li><div id="login"><Link to="/login">Login </Link></div></li>
                            <li><div id="create-account"><Link to="/create">Create Account</Link></div></li> 
                        </ul>
                    </nav>
                </Router>
                <div className="container">
                    <div id="nav-icon1" onClick={this.clicked}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                { this.state.toggle ? 
                <div className="drop-down-content">
                <Router>
                <nav>
                    <ul>
                        <li><div id="login"><Link to="/login">Login</Link></div></li>
                        <li><div id="create-account"><Link to="/create">Create Account</Link></div></li> 
                    </ul>
                </nav>
                </Router>
            </div> :
            ""}
                </div>
            </header>
        )
    }
};

export default Header;