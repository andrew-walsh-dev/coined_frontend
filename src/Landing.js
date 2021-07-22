import './Landing.css';
import logo from './images/Coined.svg';
import { useEffect } from 'react';
import Vivus from 'vivus';

export default function Landing() {
    
    const drawLogo = () => {
        new Vivus('logo', {
            type: 'sync',
            duration: 300,
            animTimingFunction: Vivus.EASE_IN,
            file: logo,
            start: 'autostart'
          })
        }

    useEffect(drawLogo);

    return(
        <div className="logo-container">
            <svg id='logo'>
                <use xlinkHref={logo}></use>
            </svg>
        </div>
    );
}