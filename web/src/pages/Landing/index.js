import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


import heroImg from '../../assets/images/heroImg.svg';


import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';



import './styles.css';

function Landing() {
    const [totalConnnections, setTotalConnections] = useState(0);

    
    return (
        <div id="page-landing" >
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1>Stacktion</h1>
                    <h2>Sua plataforma de Freelancing online.</h2>
                </div>

                <img 
                    src={heroImg} 
                    alt="Plataforma de estudos" 
                    className="hero-img"
                />

                <div className="buttons-container">
                    <Link to="/busca" className="study">
                        Quero Contratar
                    </Link>
                    <Link to="/login" className="give-classes">
                        Quero Trabalhar
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnnections} conexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;