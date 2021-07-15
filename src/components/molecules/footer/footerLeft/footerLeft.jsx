import React from 'react'
import album from '../../../../assets/static/album.jpg'
const footerLeft = () => {
    return (
        <div className="FooterLeft">
            <img src={album} alt="ghost"/>
                <div className="nameAlbum">
                    <h4>Cirice</h4>
                    <p>Ghost</p>
                </div>
        </div>
    )
}

export default footerLeft
