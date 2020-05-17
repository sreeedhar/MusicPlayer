import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Spinner from "../Spinner";
import AlbumDetail from "./AlbumDetail";
import { getAlbumTracks, getPageTitle } from "../../actions/home";

const AlbumInfo = ({ getAlbumTracks, getPageTitle, album, loading, error, match }) => {


    useEffect(() => {
        getPageTitle("Trending Albums");
        if (album.id === match.params.albumId) {
            //getPageTitle(album.label);
        }
        else {
            getAlbumTracks(match.params.albumId);
        }
    }, [getAlbumTracks, getPageTitle])



    return loading ? <Spinner />
        :
        <div>
            <AlbumDetail album={album} />;
    </div>
}



AlbumInfo.propTypes = {
    getAlbumTracks: PropTypes.func.isRequired,
    getPageTitle: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
    album: state.home.album,
    loading: state.home.loading,
    error: state.home.error,
});

export default connect(mapStateToProps, { getPageTitle, getAlbumTracks })(AlbumInfo);
