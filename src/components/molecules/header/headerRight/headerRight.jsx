import React from 'react'
import {Avatar} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const headerRight = () => {
    return (
        <div className="HeaderRight">
              <Avatar />
                <h4>IRREAL</h4>
                <ExitToAppIcon className="Logout"/>
        </div>
    )
}

export default headerRight
