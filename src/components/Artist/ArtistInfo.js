import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Spinner from "../Spinner";
import ArtistDetail from "./ArtistDetail";
import { getArtistTracks, getPageTitle, getArtistDetails, getArtists } from "../../actions/home";

const ArtistInfo = ({ getArtistTracks, getArtistDetails, getPageTitle, artist, loading, artistTracks, error, match }) => {
    getPageTitle("Trending Artist");
    useEffect(() => {
        if (artist && artist.id === match.params.artistId) {
            getPageTitle(artist.name);
        }
        else {
            getArtistTracks(match.params.artistId);
            getArtistDetails(match.params.artistId);
        }
    }, [getArtistTracks, getArtistDetails, getPageTitle])

    console.log(artistTracks);




    return loading ? <Spinner />
        :
        <div>
            <ArtistDetail artist={artist} artistTracks={artistTracks} />;
    </div>
}



ArtistInfo.propTypes = {
    getArtistTracks: PropTypes.func.isRequired,
    getPageTitle: PropTypes.func.isRequired,
    getArtistDetails: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    artist: state.home.artist,
    loading: state.home.loading,
    error: state.home.error,
    artistTracks: state.home.artistTracks
});

export default connect(mapStateToProps, { getPageTitle, getArtistTracks, getArtistDetails })(ArtistInfo);
