import React from 'react'
import { useSelector} from 'react-redux';
import {selectITEMS} from '../../features/FavoriteSlice';
import FavoriteContainer from '../../containers/favorites/favorites';
import SongRow from '../../components/organisms/main/SongRow/SongRow';
import './favorite.css'

const Favorites = () => {
    const favoritos = useSelector(selectITEMS);

    return (
        <section>
        <FavoriteContainer />
        <div className="Songs">
        {
            favoritos&&
             favoritos.map((item,index)=>
                <SongRow track={item} key={index} /> )              
        }
        </div>
    </section>
    )
}

export default Favorites
