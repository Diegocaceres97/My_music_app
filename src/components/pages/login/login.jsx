import React from 'react'
import BtnLogin from '../../atoms/BtnLogin/BtnLogin';
import ImagenSpoti from '../../../assets/static/Spotify-symbol.jpg';
import './login.scss'
const login = () => {
    return (
      
        <div className="ContainerLogin">
        <img src={ImagenSpoti} alt="logo"
               className="logo" />
            <BtnLogin />
        </div>
    
    )
}

export default login
