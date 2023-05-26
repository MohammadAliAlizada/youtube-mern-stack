import React from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'
const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/abbdJ4Yfm54/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLCTSnUZWXLDv3WTifSj0lGV78Jv8Q" alt="" />
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create app in 5 minutes #made by Nasim
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 5M Views •
                </span>
                <apan> 5 days ago</apan>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AGIKgqM4MHT8GqYNCotHLhIPasr9pzvrhKKBTKBG7944=s48-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Rainbow Hat Jr</p>
            </div>


        </div>
    )
}

export default Video
