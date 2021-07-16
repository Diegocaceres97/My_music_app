import React from 'react'
import InputBusqueda from '../../../atoms/InputBusqueda/InputBusqueda'
import SpotifyLogo from '../../../../assets/static/SpotiLogo.png'
const headerLeft = () => {
    return (
        <div className="HeaderLeft">
            <img src={SpotifyLogo} alt="SpotifyLogo" />
                    <InputBusqueda />
                   
        </div>

    )
}

export default headerLeft
