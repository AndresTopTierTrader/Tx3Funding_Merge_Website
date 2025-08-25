'use client'

import React, { useState, useEffect } from 'react'
import { useWindowDimensions } from '@/utils/misc/getWindowDimensions';

function VideoFrame({link}) {

    // State to hold the calculated dimensions
    const { width, height } = useWindowDimensions();
    const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

    // useEffect to update width and height after component mounts
    useEffect(() => {
        // Calculate video width and height based on window dimensions
        let newWidth
        let newHeight

        if (width < 1200) {
            if (width > 1000) {
                newWidth = width / 1.17;
                newHeight = height / 1.1;
            } else {
                newWidth = width / 1.2;
                newHeight = height / 3.2;
            }

        } else {
            newWidth = 1100;
            newHeight = 600;
        }

        // Update state
        setVideoSize({ width: newWidth, height: newHeight });
    }, [width, height]); // Depend on width and height so this recalculates if they change
    return (
        <div className='max-w-[1100px]'>
            <div className='flex flex-col items-center'>
                <iframe
                    width={videoSize.width.toString()}
                    height={videoSize.height.toString()}
                    src={link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default VideoFrame
