import React from 'react'
import InputBusqueda from '../../../atoms/InputBusqueda/InputBusqueda'
import SpotifyLogo from '../../../../assets/static/SpotiLogo.png'
import {Link } from 'react-router-dom';

const headerLeft = () => {
    return ( 
        <div className="HeaderLeft">        
           <Link to="/principal" >
            <img src={SpotifyLogo} alt="SpotifyLogo"/>          
            </ Link>
                    <InputBusqueda />           
        </div>
       
    )
}

export default headerLeft
