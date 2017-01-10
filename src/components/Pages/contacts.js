import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Contacts extends React.Component {
    render() {
        return (
            <div>
                <div>    
                    <Logo />
                </div>    
                <div className="title">
                    <h1>Контакти</h1>
                </div>
                <div>
                <Navbar/>    
                </div>
                <div className="container">
                    <div className="content">
                    </div>
                </div>
            </div>    
        );
    }
}