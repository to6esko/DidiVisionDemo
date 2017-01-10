import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class VirtualReality extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Виртуална реалност</h1>
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