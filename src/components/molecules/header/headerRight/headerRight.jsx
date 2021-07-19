import React from 'react'
import {Avatar} from '@material-ui/core';
import BtnFavorite from '../../../atoms/BtnFavorite/BtnFavorite'
import { Link } from 'react-router-dom';
import BtnLogout from '../../../atoms/BtnLogout/BtnLogout';
const headerRight = ({User}) => {
 
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
                <BtnLogout className="Logout"/>
        </div>
    )
}

export default headerRight
