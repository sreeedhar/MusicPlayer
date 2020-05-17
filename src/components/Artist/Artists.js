import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import ArtistItem from './ArtistItem'
import { getArtists, getPageTitle } from '../../actions/home'
import { connect } from 'react-redux';
import Spinner from '../Spinner';

const Artists = ({ getArtists, getPageTitle, artists, loading, error, match }) => {
    useEffect(() => {
        getPageTitle("Trending Artists");
        if (artists === null) {
            getArtists()
        }
    }, [getArtists, getPageTitle])

    console.log(match);

    return loading ? <Spinner /> : <Fragment>

        <div className="main-container-content">
            <div className="main-container-items">
                {artists &&
                    artists.slice(0).map((artist) => (


                        <ArtistItem
                            key={artist.id}
                            id={artist.id}
                            image={artist.picture_xl}
                            artist={artist.name}
                            match={match}
                        />
                    ))}
            </div>
        </div>
    </Fragment>
}



Artists.propTypes = {
    getArtists: PropTypes.func.isRequired,
    getPageTitle: PropTypes.func.isRequired,
}

const mapStatetoProps = state => ({
    artists: state.home.artists,
    loading: state.home.loading,
    error: state.home.error
})

export default connect(
    mapStatetoProps,
    { getArtists, getPageTitle }
)(Artists);
