import React from 'react';
import { NavBarBrand } from './components/navbar-brand';
import { NavBarTabs } from './components/navbar-end';

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
        this.handleBurger = this.handleBurger.bind(this);
    }

    handleBurger() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('#' + burger.dataset.target);

        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });
    }


    render() {
        return (
            <nav className="navbar has-background-grey is-fixed-top">
                <div className="container">
                    <NavBarBrand handleBurger={ this.handleBurger } />
                    <NavBarTabs />
                </div>
            </nav>
        );
    }
}

export { Header };
