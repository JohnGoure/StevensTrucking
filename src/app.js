import React, { Component } from 'react';
import Body from './components/body/body';
import Header from './components/header/header';
import Footer from './components/footer/footer';
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

    /*componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=PEkbSommBLV3LGIE6TLStkoAjh0bGnvU&s=fortnite', {
                    mode: 'cors'
                })
                .then((res) => {
                    return res.json()
                }).then((res) => {
                    console.log(res);
                    this.setState({
                        imgURL: res.data.images.original.url,
                        title: res.data.title,
                        searchTerm: '',
                        apiURL: 'https://api.giphy.com/v1/gifs/translate?api_key=PEkbSommBLV3LGIE6TLStkoAjh0bGnvU&s='
                    })
                }).catch((err) => {
                console.log(err);
                });
    }

    handleClick(e) {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=PEkbSommBLV3LGIE6TLStkoAjh0bGnvU&s=fortnite', {
                    mode: 'cors'
                })
                .then((res) => {
                    return res.json()
                }).then((res) => {
                    console.log(res);
                    this.setState({
                        imgURL: res.data.images.original.url,
                        title: res.data.title
                    })
                }).catch((err) => {
                console.log(err);
                });
    }*/

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
                <Body imgURL={this.state.imgURL} title={this.state.title} search={this.handleSearch} handleChange={this.setSearchTerm} searchTerm={this.state.searchTerm} error={this.state.error}/>
                <Footer />
            </div>
        )
    }
}

export default App;