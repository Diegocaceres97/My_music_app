import React from 'react'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';

const footerCenter = () => {
    return (
        <div className="FooterCenter">
                <ShuffleIcon className="shuffle"/>
                <SkipPreviousIcon className="icon"/>
                <PlayCircleOutlineIcon className="icon"/>
                <SkipNextIcon className="icon"/>
                <RepeatIcon className="repeat"/>
        </div>
    )
}

export default footerCenter
