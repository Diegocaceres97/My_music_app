import React from 'react'
import BtnLogin from '../../atoms/BtnLogin/BtnLogin';
import ImagenSpoti from '../../../assets/static/Spotify-symbol.jpg';
import { loginURL } from '../../../services/SpotifyLogic'
import LoginContainer from '../../../containers/login/login'
import './login.css'

const login = () => (
   
        <div className="ContainerLogin">
        <img src={ImagenSpoti} alt="logo"
               className="logo" />
            <BtnLogin url={loginURL}/>
            <LoginContainer />
        </div>
   
    )


export default login
