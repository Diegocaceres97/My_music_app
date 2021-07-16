import React, { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { SET_TOKEN } from '../../features/TokenSlice';
import {DataUser, PlayList, FavoriteTracks } from '../../services/SpotifyServices';
import {getTokenFromURL} from '../../services/SpotifyLogic';
import { SET_USER} from '../../features/UserSlice';
import { SET_PLAYLIST, selectPlaylist} from '../../features/PlaylistSlice';
import { SET_ITEMS} from '../../features/FavoriteSlice';
import PortadaPlace from '../../components/molecules/main/portadaPlace'
import { Link } from 'react-router-dom';
const main = () => {
    
        const [logged, setLogged] = useState(false);
        const dispatch = useDispatch();

        const playlist = useSelector(selectPlaylist);
        //const itemsFavorites = useSelector(selectITEMS);
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
        { 
        <PortadaPlace img={playlist&& playlist[0].album.images[0].url} />
        }
       </div>
            :
           <Link to="/" />
    )
}

export default main
