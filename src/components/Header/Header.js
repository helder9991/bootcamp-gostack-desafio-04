import React, { Component } from 'react';

// Importação do CSS
import './index.css';

// Importação dos Icones
import Logo from '../../assets/facebook.png'

class Header extends Component {
    render(){
        return(
            <div id="headerContainer"> 
                <img src={Logo} className="item"/>
                <div className="item">
                    Meu Perfil
                </div>
            </div>
        )
    }
}

export default Header;