import React, {useState,useEffect} from 'react'
import Headerleft from '../../molecules/header/headerLeft/headerLeft'
import HeaderRight from '../../molecules/header/headerRight/headerRight'
import './header.css'

const header = () => {
    const [valor, setValor] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setValor(true);
        }
        
    },[valor]);
    return (
            valor ?
        <div className="HeaderContainer">
            <Headerleft />
             
             <HeaderRight />
            
        </div>
         :
         <div className="HeaderLogin" />
             
        

      
          
    )
}

export default header
