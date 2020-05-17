import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import AlbumItem from './AlbumItem'
import { Link } from 'react-router-dom'
import { getAlbums, getPageTitle } from '../../actions/home'
import { connect } from 'react-redux';
import Spinner from '../Spinner';

const Albums = ({ getAlbums, getPageTitle, albums, loading, error, match }) => {
    useEffect(() => {
        getPageTitle("Trending Albums");
        if (albums === null) {
            getAlbums()
        }
    }, [getAlbums, getPageTitle])

    console.log(match);

    return loading ? <Spinner /> : <Fragment>

        <div className="main-container-content">
            <div className="main-container-items">
                {albums &&
                    albums.slice(0).map((album) => (
                        <div>


                            <AlbumItem
                                key={album.id}
                                id={album.id}
                                image={album.cover_medium}
                                title={album.title}
                                artist={album.artist.name}
                                match={match}
                            />
                        </div>
                    ))}
            </div>
        </div>
    </Fragment>
}



Albums.propTypes = {
    getAlbums: PropTypes.func.isRequired,
    getPageTitle: PropTypes.func.isRequired,
}

const mapStatetoProps = state => ({
    albums: state.home.albums,
    loading: state.home.loading,
    error: state.home.error
})

export default connect(
    mapStatetoProps,
    { getAlbums, getPageTitle }
)(Albums);
