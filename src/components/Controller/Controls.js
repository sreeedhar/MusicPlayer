import React from "react";
import { Icon } from "react-icons-kit";
import {
    ic_skip_previous,
    ic_play_arrow,
    ic_pause,
    ic_skip_next,
} from "react-icons-kit/md";

import Progress from "./Progress";


export const Controls = ({ isPlaying, changeIsPlaying, duration, currentTime }) => {
    return (
        <div className="footer-left">
            <div className="control-buttons white">
                <Icon
                    className="control-button"
                    size={30}
                    icon={ic_skip_previous}
                    onClick={() => { }}
                />
                {isPlaying ? (
                    <Icon
                        className="control-button"
                        size={30}
                        icon={ic_pause}
                        onClick={() => {
                            changeIsPlaying();
                        }}
                    />
                ) : (
                        <Icon
                            className="control-button"
                            size={30}
                            icon={ic_play_arrow}
                            onClick={() => {
                                changeIsPlaying();
                            }}
                        />
                    )}
                <Icon
                    className="control-button"
                    size={30}
                    icon={ic_skip_next}
                    onClick={() => { }}
                />
            </div>
            <div className="progress-bar white">
                <Progress currentTime={currentTime} duration={duration} />
            </div>
        </div>
    );
}


export default Controls