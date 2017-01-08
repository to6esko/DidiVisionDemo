import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './components/app';


const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory} >
    <Router path="/" component={App} />   
    </Router>, app
);