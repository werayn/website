import React from 'react';
import '../styles/App.css';
import 'antd/dist/antd.css';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore from '../core/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootRouter from '../router/rootRouter.jsx';
import { history } from '../core/utils/history.js';

/** store
 * @constant store
 * @public
 * @desc We create the redux store  with persist for the sessionStorage
 * @version 1.0
 * @since 1.0
 */
const { store, persistor } = configureStore(history);

/**
 * Main App component
 * @class App
 * @reactProps {none} none - none
 * @desc Entry point of the react app
 * @extends {React.Component}
 * @public
 * @version 1.0
 * @since 1.0
 */
class App extends React.Component {

    render() {
        return (
            <Provider store={ store }>
                <PersistGate
                    loading={ null }
                    persistor={ persistor }
                >
                    <ConnectedRouter history={ history }>
                        <RootRouter />
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export { App };
