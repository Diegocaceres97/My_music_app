import React from 'react'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid,Slider } from '@material-ui/core';

const footerRight = () => {
    return (
        <div className="FooterRight">
              <Grid container spacing={2}>
                    <Grid item> <PlaylistPlayIcon /></Grid>
                    <Grid item> <VolumeDownIcon /></Grid>
                    <Grid item xs> <Slider /></Grid>
                </Grid>
        </div>
    )
}

export default footerRight
