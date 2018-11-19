import React from 'react';
import { Route,
    Switch,
} from 'react-router-dom';
import { Header } from 'containers/Header';
import Home from 'containers/Home';
import  { NoMatch } from 'containers/404';

class MainRouter extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route component={ NoMatch } />
                </Switch>
            </div>
        );
    }
}

export default MainRouter;
