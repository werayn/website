import React from 'react';

class NavBarTabs extends React.Component {
    render() {
        return (
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-end">
                    <span className="navbar-item">
                        <a className=" has-text-white" href="/portfolio">
                            {'PortFolio'}
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="has-text-white" href="/CV">
                            {'CV'}
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className=" has-text-white" href="/contact">
                            {'Contact'}
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="has-text-white" href="/blog">
                            {'Blog'}
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export { NavBarTabs };
