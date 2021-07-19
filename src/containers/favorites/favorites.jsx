import React from 'react'
import { useSelector} from 'react-redux';
import {selectITEMS} from '../../features/FavoriteSlice';
import PortadaPlace from '../../components/molecules/main/portadaPlace';

const Favorites = () => {
    const favoritos = useSelector(selectITEMS);
    return (
       
             <div className="BodyContainer">
        { 
        <PortadaPlace img={favoritos&& favoritos[0].album.images[0].url} titulo1="¡Favoritos!"
         titulo2="Enjoy it now" />
        }
       </div>
        

    )
}

export default Favorites
