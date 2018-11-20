import React from 'react';
import { FooterInfo } from './components/info';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer class="footer is-fixed-bottom">
                    <FooterInfo />
                </footer>
            </div>
        );
    }
}

export { Footer };
