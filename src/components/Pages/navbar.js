import React from 'react';
import { Link } from 'react-router';

import Home from './home';
import About from './about';


export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                        <li><Link to="#/home"><h3>Home</h3></Link></li>    
                        <li><Link to="/about"><h3>About</h3></Link></li>
                    </ul>
                </div>
            </div>    
        )
    }
}