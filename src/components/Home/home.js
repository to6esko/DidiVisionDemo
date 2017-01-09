import React from 'react';

export default class Home extends React.Component {
    render() {
        let logo = {
            backgroundImage: 'url(' + 'img/Logo-1.png' + ')'};
        return (
            <div className="logo-content">
                <span className="logo" style={logo}></span> 
                <div className="title">
                <h1>Начало</h1>    
                </div>    
            </div>  
        );
    }
}