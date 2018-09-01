import React, { Component } from 'react';
import Body from './components/body/body';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SignUp from './components/sign-up-form/sign-up-form';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './stylesheets/style.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: "",
            title: "",
            searchTerm: "",
            searchURL: "https://api.giphy.com/v1/gifs/translate?api_key=PEkbSommBLV3LGIE6TLStkoAjh0bGnvU&s=",
            error: ""
        };
        //this.handleClick = this.handleClick.bind(this);
        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    setSearchTerm(e) {
        this.setState({
            searchTerm: e.target.value,
            error: ""
        })
    }

    handleSearch(e) {
        e.preventDefault();
        let searchURL = this.state.searchURL + this.state.searchTerm;
        fetch(searchURL, {
                    mode: 'cors'
                })
                .then((res) => {
                    return res.json()
                }).then((res) => {
                    console.log(res);
                    this.setState({
                        imgURL: res.data.images.original.url,
                        title: res.data.title,
                        error: ""
                    })
                }).catch((err) => {
                    console.log(err);
                    if (err) {
                        this.setState({
                            error: `Can't find ${this.state.searchTerm}`
                        })
                    }
                });
    }

    render() {
        return(
            <div>
                <Header />
                <Router>
                    <div>
                    <Route exact={true} path="/" component={Body} />
                    <Route path="/create" component={SignUp} />
                    </div>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;