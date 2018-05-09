import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import routes from './routes';
import './less/base.less';

console.log(store.getState());
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));
