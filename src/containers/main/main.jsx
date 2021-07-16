import React, { useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { SET_TOKEN } from '../../features/TokenSlice';
import {DataUser, PlayList, FavoriteTracks } from '../../services/SpotifyServices';
import {getTokenFromURL} from '../../services/SpotifyLogic';
import { SET_USER} from '../../features/UserSlice';
import { SET_PLAYLIST} from '../../features/PlaylistSlice';
import { SET_ITEMS} from '../../features/FavoriteSlice';
import { Link } from 'react-router-dom';
const main = () => {
    
        const [logged, setLogged] = useState(false);
        const dispatch = useDispatch();
        useEffect(() =>{
            
                        if(localStorage.getItem('token')){
                          setLogged(true);
                        }
                        const _token = localStorage.getItem('token');
                        if(_token){
                            dispatch(SET_TOKEN(localStorage.getItem('token')))
                            DataUser().then(user => dispatch(SET_USER(user)));
                            PlayList().then(playlist =>dispatch(SET_PLAYLIST(playlist)));
                            FavoriteTracks().then(favoritos =>dispatch(SET_ITEMS(favoritos)));

                        }else{
                                if(window.location.hash !== ""){
                                    if(!localStorage.getItem('token')){
                                        const hash = getTokenFromURL(); //Aqui obtenemos un token
                                        localStorage.setItem('token',hash.access_token);
                                        window.location.hash="";
                                        window.location="";
                                      }
                                }
                            
                        }
                        
                
        },[dispatch])
    return (
        logged ?
        <div className="BodyContainer">
        
       </div>
            :
           <Link to="/" />
    )
}

export default main
