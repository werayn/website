import React from 'react';

class NavBarEnd extends React.Component {
    render() {
        return (
            <div id="navbar-default" class="navbar-menu">
                <div class="navbar-end">
                    <span class="navbar-item">
                        <a class="is-link is-active" href="/">
                            { 'Home' }
                        </a>
                    </span>
                    <span class="navbar-item">
                        <a class="is-link is-active" href="/CV">
                            { 'CV' }
                        </a>
                    </span>
                    <span class="navbar-item">
                        <a class="is-link is-active" href="/blog">
                            { 'Blog' }
                        </a>
                    </span>
                    <span class="navbar-item">
                        <a class="is-link is-active" href="/portfolio">
                            { 'PortFolio' }
                        </a>
                    </span>
                    <span class="navbar-item">
                        <a class="is-link is-active" href="/about">
                            { 'About' }
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export { NavBarEnd };
