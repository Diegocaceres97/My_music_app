import React from 'react'
import {loginURL} from '../../../services/SpotifyLogic'
const BtnLogin = () => {
    return (
        <button className="LoginButton" href={loginURL}>
            Login
        </button>
    )
}

export default BtnLogin
