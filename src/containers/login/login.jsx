import React, {useState, useEffect} from 'react'

const Login = () => {
    const [valor, setValor] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setValor(true);
        }
        
    },[]);
    return (
            valor ? 
          
                <div>
         {window.location.href="http://localhost:3000/principal"}
        </div>

        :
        <div >

        </div>
    
   
    )
}

export default Login
