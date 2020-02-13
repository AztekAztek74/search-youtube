import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoritesList from './containers/FavotitesList/FavotitesList';
import Search from './containers/Search/Search';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/search' component={Search} />
                    <Route path='/favorites' component={FavoritesList} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
