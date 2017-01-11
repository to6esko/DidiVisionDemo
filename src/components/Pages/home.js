import React from 'react';

import Logo from './logo';
import Navbar from './navbar';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <div className="title">
                    <h1>Начало</h1>
                </div>
                <div>
                    <Navbar />
                </div>
                <div className="container">
                    <div className="content">
                        <h3> Какво е Lorem Ipsum?</h3>  
                        <p>
                    Lorem Ipsum е елементарен примерен текст, 
                    използван в печатарската и типографската индустрия. 
                    Lorem Ipsum е индустриален стандарт от около 1500 година, 
                    когато неизвестен печатар взема няколко печатарски букви 
                    и ги разбърква, за да напечата с тях книга с примерни шрифтове.     
                        </p>
                        <h3> Какво е Lorem Ipsum?</h3>  
                        <p>
                    Lorem Ipsum е елементарен примерен текст, 
                    използван в печатарската и типографската индустрия. 
                    Lorem Ipsum е индустриален стандарт от около 1500 година, 
                    когато неизвестен печатар взема няколко печатарски букви 
                    и ги разбърква, за да напечата с тях книга с примерни шрифтове.     
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}