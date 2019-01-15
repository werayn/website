import React from 'react';
import { Route,
    Switch,
} from 'react-router-dom';
// Main containers, always try to avoid default export !
import { Header } from 'containers/Header';
import { Footer } from 'containers/Footer';
import { NoMatch } from 'containers/404';
import Contact from 'containers/Contact';
import Blog from 'containers/Blog';
import Port from 'containers/PortFolio';
import Home from 'containers/Home';
import Project from 'containers/Project';
import CV from 'containers/CV';

class MainRouter extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/blog" component={ Blog } />
                    <Route path="/project-inquiry" component={ Project } />
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
