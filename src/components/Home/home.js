import React from 'react';

export default class Home extends React.Component {
    render() {
        let logo = {
            backgroundImage: 'url(' + 'img/Logo-1.png' + ')', width: 180, height: 90};
        return (
            <div className="logo-content">
                <span className="logo" style={logo}></span>        
            </div>  
        );
    }
}