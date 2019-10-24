import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CardList from './components/CardList';
import BtnLoad from './components/BtnLoad';
import Spinner from './components/Spinner';


class App extends Component {
    state = {
        memes: [
        ],
        theme: {
            body: "container-fluid dark-body body",
            card: "card text-white bg-dark",
            nav: "navbar navbar-expand-sm bg-dark navbar-dark fixed-top",
            navBtn: "btn btn-secondary",
            navBtnText: "Theme: White",
            spinner: "loader"
        },
        loading:false
    }

    render() {
        return (
            <div className={this.state.theme.body}>
                <div style={{ paddingTop: 75 + "px" }} className="card-columns">
                    <NavBar toggleTheme={this.toggleTheme} theme={this.state.theme}/>
                    <CardList memes={this.state.memes} theme={this.state.theme}/>
                </div>
                <Spinner theme={this.state.theme} />
                <BtnLoad loadMore={this.loadMore}/>
            </div>
        );
    }

    componentDidMount() {
        this.getMemes("/memes");
        window.addEventListener("scroll", this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.loadMore();
        }
      }

    loadMore = () => {
        const oldestMemeId = this.state.memes[this.state.memes.length-1].id;
        this.getMemes(`/memes/${oldestMemeId}`)
    }

    toggleTheme = () => {
        if (this.state.theme.body.indexOf("dark-body") > -1) {
            this.setState( {
                memes: this.state.memes,
                theme: {
                    body: "container-fluid body",
                    card: "card",
                    nav: "navbar navbar-expand-sm fixed-top bg-light navbar-light",
                    navBtn: "btn",
                    navBtnText: "Theme: Dark"
                }
            })
        } else {
            this.setState( {
                memes: this.state.memes,
                theme: {
                    body: "container-fluid dark-body body",
                    card: "card text-white bg-dark",
                    nav: "navbar navbar-expand-sm bg-dark navbar-dark fixed-top",
                    navBtn: "btn btn-secondary",
                    navBtnText: "Theme: White"
                }
            })
        }
    }

    getMemes = async (path) => {
        if (this.state.loading) return;
        let theme = Object.assign({}, this.state.theme);
        theme.spinner="loader";
        this.setState({loading: true, theme});
        const API = "https://08f935720c3d5ed1621a588fe31ac177.fossnoob.xyz/api";
        const response = await fetch(`${API}${path}`);
        const json = await response.json();
        this.setState({
            memes: [...this.state.memes].concat(json)
        });
        theme.spinner="";
        this.setState({loading: false, theme});
    }
}

export default App;