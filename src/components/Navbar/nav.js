import React from 'react';
import { Link } from 'react-router';
import Home from './Home/home';
import Home from './About/about';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="#/home"><Home /></Link></li>
                    <li><Link to="/about"><About /></Link></li>
                    <li><Link to="/services"><Services /></Link></li>
                    <li><Link to="/copyingServices"><CopyingServices /></Link></li>
                    <li><Link to="/multimedia"><Multimedia /></Link></li>
                    <li><Link to="/virtualReality"><VirtualReality /></Link></li>
                    <li><Link to="/shop"><Shop /></Link></li>
                    <li><Link to="/contacts"><Contacts /></Link></li>
                </ul>
            </div>
        )
    }
}