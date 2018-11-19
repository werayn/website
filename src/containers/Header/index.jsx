import React from 'react';
import { history } from 'common/history';

class Header extends React.Component {
    /**
     * constructor of landingPage
     * @ignore
     * @constructor Header construct class
     * @desc build class and bind method
     * @version 1.0
     * @since 1.0
     * @private
     */
    constructor(props) {
        super();
        this.handleBlog = this.handleBlog.bind(this);
        this.handleCV = this.handleCV.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handlePort = this.handlePort.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    handleProfile() {
        history.push('/me');
    }

    handleCV() {
        history.push('/CV');
    }

    handleBlog() {
        history.push('/blog');
    }

    handlePort() {
        history.push('/portfolio');
    }

    handleHome() {
        history.push('/');
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar is-transparent">
                    <div className="navbar-brand ">
                        <a onClick={ this.handleOnClickLogo } className="navbar-item">
                            <div className="navbar-base" alt="mm logo" />
                        </a>
                    </div>
                    <div className="navbar-item cart-button-container">
                        <button onClick={ this.handleHome }>
                            {'Home'}
                        </button>
                        <button onClick={ this.handleProfile }>
                            {'Profile'}
                        </button>
                        <button onClick={ this.handleCV }>
                            { 'CV' }
                        </button>
                        <button onClick={ this.handleBlog }>
                            { 'Blog' }
                        </button>
                        <button onClick={ this.handlePort }>
                            { 'PortFolio' }
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
}

export { Header };
