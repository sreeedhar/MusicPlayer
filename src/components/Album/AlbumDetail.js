import React from "react";
import { connect } from "react-redux";
import convert from "convert-seconds";
import { Icon } from "react-icons-kit";
import { ic_play_arrow, ic_play_circle_filled } from "react-icons-kit/md";
import { getTrackInfo } from "../../actions/home";
import Spinner from '../Spinner';

function AlbumDetail({ album, getTrackInfo }) {
    if (!album) {
        return <Spinner />;
    }

    const duration = album.duration && convert(album.duration);
    let trackNumber = 1;

    return (
        <div className="details-container white fl w-100">
            <div className="details-info">
                <div className="details-info-left grow" style={{ paddingTop: "10px" }}>
                    <img className="br4" src={album.cover_medium} alt="cover" />
                </div>
                <div className="details-info-right">
                    <div className="details-title white b u" style={{ fontSize: 48, fontWeight: 600 }} >{album.title}
                        <div className="details-contributor white f3">
                            {album.artist && album.artist.name}
                        </div></div>

                    <div className="b white-70">{album.nb_tracks} songs</div>
                    <div className="b white-70">Released: {album.release_date}</div>
                    <div className="b white-70">
                        {duration ? <p className="b white-70">  Duration:  {duration.minutes} min </p> : <p></p>}
                    </div>

                </div>
            </div>
            <div className="details-bottom">
                <br />
                {album.tracks &&
                    album.tracks.data.map((track) => (
                        <TrackItem
                            key={track.id}
                            id={track.id}
                            number={trackNumber++}
                            title={track.title_short}
                            duration={track.duration}
                            artist={track.artist.name}
                            trackSrc={track.preview}
                            getTrackInfo={getTrackInfo}
                        />
                    ))}
            </div>
        </div>
    );
}

function TrackItem({ id, number, title, duration, artist, getTrackInfo }) {
    const trackDuration = convert(duration);
    return (
        <div className="track-item-container">
            <table className="track-item">
                <tbody>
                    <tr key={id}>
                        <td>{number}</td>
                        <td className="b">{title}</td>
                        <td className="b white-80">{artist}</td>
                        <td>
                            {trackDuration.minutes < 10
                                ? `0${trackDuration.minutes}`
                                : trackDuration.minutes}
              :
              {trackDuration.seconds < 10
                                ? `0${trackDuration.seconds}`
                                : trackDuration.seconds}
                        </td>
                        <td>
                            <Icon
                                size={20}
                                icon={ic_play_circle_filled}
                                onClick={() => {
                                    getTrackInfo(id);
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    getTrackInfo: (id) => dispatch(getTrackInfo(id)),
});

export default connect(null, mapDispatchToProps)(AlbumDetail);
