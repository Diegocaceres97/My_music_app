import React from 'react'
import './footer.scss'
const footer = () => {
    const logueo = localStorage.getItem('token') ? true : false;
    return (
            logueo ? 
        <div className="FooterContainer">
            <div className="FooterLeft">

            </div>
            <div className="FooterCenter">

            </div>
            <div className="FooterRight"> 
            
            </div>
        </div>
        :
        <div className="FooterLogin">

        </div>
    
   
    )
        
}

export default footer
