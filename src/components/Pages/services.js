import React from 'react';

import Navbar from './navbar';
import Logo from './logo';

export default class Services extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Сервиз</h1>
                </div>
                <div>
                    <Navbar />
                </div>
                <div className="container">
                    <div className="content">
                        <h3>Откъде мога да го взема?</h3>  
                        <p>
Съществуват много вариации на пасажа Lorem Ipsum, но повечето от тях са променени по един или друг начин чрез добавяне на смешни думи или разбъркване на думите, което не изглежда много достоверно. Ако искате да използвате пасаж от Lorem Ipsum, трябва да сте сигурни, че в него няма      
                        </p>
                        <h3>Откъде мога да го взема?</h3>  
                        <p>
                    
Съществуват много вариации на пасажа Lorem Ipsum, но повечето от тях са променени по един или друг начин чрез добавяне на смешни думи или разбъркване на думите, което не изглежда много достоверно. Ако искате да използвате пасаж от Lorem Ipsum, трябва да сте сигурни, че в него няма      
                        </p> 
                    </div>
                </div>
            </div>
        );
    }
}