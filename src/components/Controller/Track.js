import React from 'react'
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_up } from "react-icons-kit/md";

const Track = ({ trackName, trackArtist, trackImage }) => {
    return (
        <div className="footer-left white">
            <div className="artist-image-small" >
                <img className="db" style={{ width: "55px", height: "55px" }} src={trackImage ? trackImage : "https://api.deezer.com/album/81763/image"} alt="artistimage" />
            </div>
            <div className="track-info">
                <div className="footer-button-mobile">
                    <Icon icon={ic_keyboard_arrow_up} />
                </div>
                <div className="artist-name f6 b">{trackArtist ? trackArtist : "Linkin Park"}</div>
                <div className="track-name f5 b">{trackName ? trackName : "In The End"}</div>
            </div>
        </div>
    )
}

export default Track;