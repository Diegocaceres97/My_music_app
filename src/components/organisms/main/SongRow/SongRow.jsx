import React from 'react'
import FavoriteIcon from "@material-ui/icons/Favorite"

const SongRow = ({track}) => {
    if(track==null){window.alert("gola")}
    return (
        <div className="SongRowContainer">
            <FavoriteIcon className="Icons" fontSize="medium"/>
                <img src={ track.album.images[0].url } alt="album" />
                <div className="SongInfo">
                    <h4>{track.name}</h4>
                    <p>{
                        track.artists.map(artist => 
                            artist.name).join(", ")
                        },
                        {
                            track.album.name
                        }
                        </p>
                </div>
        </div>
    )
}

export default SongRow