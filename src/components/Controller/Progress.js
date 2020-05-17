import React from 'react'
import convert from "convert-seconds";

const Progress = ({ currentTime, duration, changeSeek, progress }) => {
    const currentTimeNo = currentTime && convert(currentTime);
    const durationNo = duration && convert(duration);

    return (
        <div className="progress" style={{ backgroundColor: "#1a092e" }}>
            <span className="elapsed b ">
                {currentTimeNo
                    ? currentTimeNo.minutes < 10
                        ? `0${currentTimeNo.minutes}`
                        : currentTimeNo.minutes
                    : "0"}
          :
          {currentTimeNo
                    ? currentTimeNo.seconds < 10
                        ? `0${currentTimeNo.seconds}`
                        : currentTimeNo.seconds
                    : "00"}
            </span>
            <progress
                onClick={changeSeek}
                value={currentTime ? currentTime : 0}
                max={duration ? duration : 0}
                ref={progress}
            />
            <span className="duration b">
                {durationNo
                    ? durationNo.minutes < 10
                        ? `0${durationNo.minutes}`
                        : durationNo.minutes
                    : "0"}
          :
          {durationNo
                    ? durationNo.seconds < 10
                        ? `0${durationNo.seconds}`
                        : durationNo.seconds
                    : "00"}
            </span>
        </div>
    )
}

export default Progress;