import React from 'react';
import { Welcoming } from './components/welcoming.jsx';
import { NumberPres } from './components/NumberPres';

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <section class="hero is-primary">
                    <Welcoming />
                </section>
                <section class="hero is-primary">
                    <NumberPres />
                </section>
            </div>

        );
    }
}

export default Home;
