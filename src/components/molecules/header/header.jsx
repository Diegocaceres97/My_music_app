import React, {useState} from 'react'
import './header.scss'
const header = () => {
    const [valor, setValor] = useState(false)
    
    return (
      <div>
          {
            valor ?
        <div className="HeaderContainer">

            <div className="HeaderLeft">

            </div>
            <div className="HeaderRight"> 
            
            </div>
            
        </div>
         :
         <div className="HeaderLogin">
             
         </div>
}
       </div>
          
    )
}

export default header
