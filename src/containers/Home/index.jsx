import React from 'react';
import { Welcoming } from './components/welcoming.jsx';
import { NumberPres } from './components/NumberPres';

class Home extends React.Component {
    render() {
        return (
            <div id="homepage test">
                <Welcoming />
                <NumberPres />
            </div>
        );
    }
}

export default Home;
