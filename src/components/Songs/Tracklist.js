import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Spinner from '../Spinner';
import { getTracks, getTrackInfo, getPageTitle } from '../../actions/home'

const Tracklist = ({ getTracks, getTrackInfo, getPageTitle, tracks, loading, error }) => {

    useEffect(() => {
        getPageTitle("Recommended Releases");
        if (tracks === null) getTracks();
    }, [getTracks, getPageTitle]);

    if (loading) {
        return < Spinner />;
    }
    return (
        <div className="main-container-content">
            <div className="main-container-items">
                {tracks &&
                    tracks.map((track) => (
                        <TrackItem
                            key={track.id}
                            id={track.id}
                            image={track.album.cover_medium}
                            title={track.title}
                            artist={track.artist.name}
                            getTrackInfo={getTrackInfo}
                        />
                    ))}
            </div>
        </div>
    );
}

function TrackItem({ getTrackInfo, id, image, title, artist }) {
    return (

        <div className="db center mw5 grow dim br5">
            <img
                src={image}
                alt="album cover"
                onClick={() => {
                    getTrackInfo(id);
                }}
            />

            <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 fw9 white">{title} <br />
                    <dd className="gray">{artist}</dd>
                </dd>
            </dl>

        </div >
    );
}

Tracklist.propTypes = {
    getTrackInfo: PropTypes.func.isRequired,
    getTracks: PropTypes.func.isRequired,
    getPageTitle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    tracks: state.home.tracks,
    loading: state.home.loading,
    error: state.home.error,
});



export default connect(mapStateToProps, { getPageTitle, getTrackInfo, getTracks })(Tracklist);
