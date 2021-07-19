import React from 'react'
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';


const bodyMain = ({img, titulo1, titulo2}) => {
    return(
    <div className="Info">
        {
   img ?
   <img src={img} alt="portadaAlbum" />
   :
   <PhotoAlbumIcon fontSize="large" />
        }  
        <div className="InfoText">
        <h4>{titulo1}</h4>
        <h2>{titulo2}</h2>
        <p>Descubre lo mejor</p>
        </div>
</div>
)
}
export default bodyMain
