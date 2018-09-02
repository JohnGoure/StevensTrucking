import React, { Component } from 'react';
import Body from './components/body/body';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SignUp from './components/sign-up-form/sign-up-form';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './stylesheets/style.scss'

class App extends Component {
    render() {
        return(
            <Router>
            <div>
                <Header />
                    <Route exact={true} path="/" component={Body} />
                    <Route path="/create" component={SignUp} />
                <Footer />
            </div>
            </Router>
        )
    }
}

export default App;