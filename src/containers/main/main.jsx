import React, { useState, useEffect} from 'react'
import { getTokenFromURL } from '../../services/SpotifyLogic'

const main = () => {
  
        const [logueo, setLogueo] = useState(false);

        useEffect(() =>{
                if(window.location.hash){ //mandaremos de aca las canciones y eso?
                    if(window.location.hash !== ""){

                        if(!localStorage.getItem('token')){
                          const hash = getTokenFromURL(); //Aqui obtenemos un token
                          localStorage.setItem('token',hash.access_token);
                          window.location.hash="";
                          window.location="";
                          setLogueo(true);
                        }
                        }
                }
        },[logueo])
    return (
        <div>
            
        </div>
    )
}

export default main
