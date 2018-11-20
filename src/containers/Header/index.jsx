import React from 'react';
import { history } from 'common/history';
import { NavBarBrand } from './components/navbar-brand';
import { NavBarEnd } from './components/navbar-end';

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
            <section class="section is-header">
                <div class="container">
                    <nav class="navbar is-fixed-top">
                        <NavBarBrand />
                        <NavBarEnd />
                    </nav>
                </div>
            </section>
        );
    }
}

export { Header };
