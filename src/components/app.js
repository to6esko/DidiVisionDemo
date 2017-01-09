import React from 'react';
import { Link } from 'react-router';
import Home from './Home/home';

export default class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>
                    <Home />
                </div>
            </div>
        )
    }
}

