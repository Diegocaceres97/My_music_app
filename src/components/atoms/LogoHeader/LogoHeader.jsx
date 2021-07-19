import React from 'react'
import {Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import SpotifyLogo from '../../../assets/static/SpotiLogo.png';

const LogoHeader = () => {
    return (
        <>
        <Link to="/principal" >
            <img src={SpotifyLogo} 
            alt="SpotifyLogo"
            data-tip data-for="botonTooltipHeader"/>          
            </ Link>
            <ReactTooltip id="botonTooltipHeader"
        place="right"
        >
             Inicio
        </ReactTooltip>
        </>
    )
}

export default LogoHeader
