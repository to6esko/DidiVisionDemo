import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>За нас</h1>
                </div>
                <div>
                    <Navbar />
                </div>
                <div className="container">
                    <div className="content">
                    </div>
                </div>
            </div>
        );
    }
}