import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        const { toggleTheme, theme } = this.props;
        return (
            <nav className={theme.nav}>
                <span className="navbar-brand">LK Memes</span>
                <ul className="nav navbar-nav ml-auto">
                    <button onClick={toggleTheme} className={theme.navBtn}>{theme.navBtnText}</button>
                </ul>
            </nav>
        );
    }
}

export default NavBar;