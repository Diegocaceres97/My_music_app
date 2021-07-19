import React from 'react'
import ReactTooltip from 'react-tooltip';
import StarsIcon from '@material-ui/icons/Stars';
import Main from '../../../pages/main/main'

const BtnFavorite = () => {
    return (
        <>
      
       < StarsIcon data-tip data-for="botonTooltip" className="BtnFavorite" onClick={()=><Main res={true}/>}/>
       
       <ReactTooltip id="botonTooltip"
       place="bottom"
       >
            ir a favoritos
       </ReactTooltip>
       </>
    )
}

export default BtnFavorite
