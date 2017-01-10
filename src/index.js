import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import createHistory from 'history/createBrowserHistory';
//import { createHashHistory } from 'history';

import Home from './components/Pages/home';
import App from './components/app';
import About from './components/Pages/about';


const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={App}/>
        <Route path="about" component={About}/>
    </Router >, app
);

/*
//let history = new createHashHistory();
const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path="about" component={About}/>
    </Router >, app
);
*/