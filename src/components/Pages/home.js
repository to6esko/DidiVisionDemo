import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                <Logo/>    
                </div> 
                    <div className="title">
                        <h1>Начало</h1>
                    </div>
                       
                </div>
        );
    }
}