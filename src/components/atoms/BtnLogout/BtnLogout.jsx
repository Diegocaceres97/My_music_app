import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReactTooltip from 'react-tooltip';
const BtnLogout = () => {
    const cerrarSession = () => {
        localStorage.removeItem('token');
        window.location.href="http://localhost:3000/";
    }
    return (
        <>
        <ExitToAppIcon data-tip data-for="botonTooltipLogout" onClick={cerrarSession} className="Logout"/>
        <ReactTooltip id="botonTooltipLogout"
        place="bottom"
        >
             Cerrar Session
        </ReactTooltip>
        </>
        )
}

export default BtnLogout
