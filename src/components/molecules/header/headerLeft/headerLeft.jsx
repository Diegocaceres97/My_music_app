import React from 'react'
import InputBusqueda from '../../../atoms/InputBusqueda/InputBusqueda'
import LogoHeader from '../../../atoms/LogoHeader/LogoHeader';


const headerLeft = () => {
    return ( 
        <div className="HeaderLeft">        
                <LogoHeader />
                    <InputBusqueda />  
                             
        </div>
       
    )
}

export default headerLeft
