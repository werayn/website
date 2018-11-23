import React from 'react';

class NavBarEnd extends React.Component {
    render() {
        return (
            <div id="navbar-default" className="navbar-menu">
                <div className="navbar-end">
                    <span className="navbar-item">
                        <a className="is-link is-active" href="/">
                            { 'Home' }
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="is-link is-active" href="/CV">
                            { 'CV' }
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="is-link is-active" href="/blog">
                            { 'Blog' }
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="is-link is-active" href="/portfolio">
                            { 'PortFolio' }
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="is-link is-active" href="/about">
                            { 'About' }
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export { NavBarEnd };
