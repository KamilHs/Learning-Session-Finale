import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';


import App from './components/App';
import Posts from './components/Posts';
import reducers from './reducers';

const store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <Link to="/Todos">Todos</Link>
            <Link to ="/Posts">Posts</Link>
            <Route path="/Todos" component={App}/>
            <Route path="/Posts" component={Posts}/>
        </Router>

    </Provider>
    , document.getElementById('root'));

