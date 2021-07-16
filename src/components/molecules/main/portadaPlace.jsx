import React from 'react'
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
const bodyMain = ({img}) => {
    return(
    <div className="Info">
        {
   img ?
   <img src={img} alt="portadaAlbum" />
   :
   <PhotoAlbumIcon fontSize="large" />
        }  
        <div className="InfoText">
        <h4>¡Amazing!</h4>
        <h2>Lo mas escuchado</h2>
        <p>Descubre lo mejor</p>
        </div>
</div>
)
}
export default bodyMain
