import React from 'react'


const BtnLogin = ({ url }) => {
    
    return (
        <button className="LoginButton" onClick={()=>window.location.href=url}>
            Login 
        </button>
      
    )
}

export default BtnLogin
