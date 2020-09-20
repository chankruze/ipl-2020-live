/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 19 2020 19:24:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function VideoPlayer(props) {
    const {url, title} = props.streamData

    return (
        <React.Fragment>
            <iframe src={url} title={title} className="stream-player" allowFullScreen/>
        </React.Fragment>
    )
}

export default VideoPlayer
