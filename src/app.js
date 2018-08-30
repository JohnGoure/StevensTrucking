import React, { Component } from 'react';
import Body from './components/body/body';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './stylesheets/style.scss'

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default App;