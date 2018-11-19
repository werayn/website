import React from 'react';
import { Route,
    Switch,
} from 'react-router-dom';
// Main containers, always try to avoid default export !
import { Header } from 'containers/Header';
import { Footer } from 'containers/Footer';
import { NoMatch } from 'containers/404';
import Me from 'containers/Me';
import Blog from 'containers/Blog';
import Port from 'containers/PortFolio';
import CV from 'containers/CV';
import Home from 'containers/Home';

class MainRouter extends React.Component {
//@todo : gods games page
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/me" component={ Me } />
                    <Route path="/blog" component={ Blog } />
                    <Route path="/portfolio" component={ Port } />
                    <Route path="/CV" component={ CV } />
                    <Route component={ NoMatch } />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default MainRouter;
