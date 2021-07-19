import React from 'react'
import {Avatar} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BtnFavorite from '../../../atoms/BtnFavorite/BtnFavorite'
import { Link } from 'react-router-dom';

const headerRight = ({User}) => {
    const cerrarSession = () => {
        localStorage.removeItem('token');
        window.location.href="http://localhost:3000/";
    }
    return (
        <div className="HeaderRight">
            <Link to="/favoritos">
                <BtnFavorite/>
                </Link>
              <Avatar src={User&& User.images[0].url}/>
                <h4> {
               User !=null ?
               User.display_name
               :
               "user"
           }</h4>
                <ExitToAppIcon onClick={cerrarSession} className="Logout"/>
        </div>
    )
}

export default headerRight
