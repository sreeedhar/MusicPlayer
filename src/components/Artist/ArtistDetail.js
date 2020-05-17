import React, { Fra } from "react";
import { connect } from "react-redux";
import convert from "convert-seconds";
import { Icon } from "react-icons-kit";
import { ic_play_arrow, ic_play_circle_filled } from "react-icons-kit/md";
import { getTrackInfo, getPageTitle } from "../../actions/home";
import Spinner from "../Spinner";

function ArtistDetail({ artist, getTrackInfo, artistTracks }) {
    if (!artist) {
        return <Spinner />;
    }

    console.log(artist);
    let trackNumber = 1;
    getPageTitle(artist.name);




    let fans = (artist.nb_fan / 1.0e6).toPrecision(2);


    return artistTracks.length > 0 ? (
        <div className="details-container white">
            <div className="details-info">
                <div className="details-info-left grow" style={{ paddingTop: "10px" }}>
                    <img
                        src={
                            artist.picture_medium
                        }
                        alt="cover"
                    />
                </div>
                <div className="details-info-right">
                    <div className="details-contributor" style={{ fontSize: 58 }}>
                        {artist.name}
                    </div>
                    <div className="b white-70">
                        Number of albums released: {artist.nb_album}
                        <br />
                        Followed by: {fans} million

                    </div>

                </div>
            </div>
            <br />
            <div className="details-bottom">
                <div className="details-bottom-title">Tracks</div>


                {artistTracks[0].data.map((track) => (
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
    )


        :

        <Spinner />

}




function TrackItem({ id, number, title, duration, artist, getTrackInfo }) {
    //const trackDuration = convert(duration);
    return (
        <div className="track-item-container">
            <table className="track-item">
                <tbody>
                    <tr key={id}>
                        <td>{number}</td>
                        <td className="b">{title}</td>
                        <td className="b white-70">{artist}</td>
                        <td>

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

export default connect(null, mapDispatchToProps)(ArtistDetail);
