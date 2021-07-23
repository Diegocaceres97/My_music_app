import React from 'react'
import { useSelector} from 'react-redux';
import { selectPlaylist} from '../../features/PlaylistSlice';
import PortadaPlace from '../../components/molecules/main/portadaPlace'

const Main = () => {
        const playlist = useSelector(selectPlaylist);
        //const itemsFavorites = useSelector(selectITEMS);
        
    return (
       
        <div className="BodyContainer">
        { 
        <PortadaPlace img={playlist&& playlist[0].album.images[0].url} titulo1="PlayList"
        titulo2="¡Discover it now!" />
        }
       </div>
          
    )
}

export default Main
