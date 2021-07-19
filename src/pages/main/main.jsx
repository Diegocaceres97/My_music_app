import React from 'react'
import MainContainer from '../../containers/main/main';
import { useSelector} from 'react-redux';
import { selectPlaylist} from '../../features/PlaylistSlice';
import SongRow from '../../components/organisms/main/SongRow/SongRow';
import './main.css'

const Main = ({res}) => {
    const playlist = useSelector(selectPlaylist);
    if(res){
        console.log("lllegoooooooo")
    }
    return (
        <section>
            <MainContainer />
            <div className="Songs">
            {
                playlist&&
                 playlist.map((item,index)=>
                    <SongRow track={item} key={index} /> )              
            }
            </div>
        </section>
    )
}

export default Main
