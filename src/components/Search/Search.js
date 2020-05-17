import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner';
import { Link, Redirect } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_search } from "react-icons-kit/md";
import { connect } from "react-redux";
import { getSearchResult, getTrackInfo, getPageTitle } from "../../actions/home";
import SearchItem from './SearchItem'

const Search = ({ result, loading, error, getTrackInfo, getSearchResult, getPageTitle }) => {
    const [state, setState] = useState({
        value: ""
    });

    const { value } = state;

    const onChange = e =>
        setState({ [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        getSearchResult(value);
    };


    useEffect(() => {
        getPageTitle("Search");
    }, [])


    return loading ? (
        <Spinner />
    )
        :
        (

            <div className="main-container-content">
                <div className="mobile-search">
                    <div className="wrap">
                        <form className="search" onSubmit={e => onSubmit(e)}>
                            <input
                                type="text"
                                name="value"
                                className="search-term"
                                placeholder="Artists, tracks..."
                                value={value}
                                onChange={e => onChange(e)}
                            />
                            <button type="submit" className="search-button">
                                <Icon className="search-icon" icon={ic_search} />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="main-container-items">
                    {result &&
                        result.data.map((track) => (
                            <SearchItem
                                key={track.id}
                                id={track.id}
                                image={track.album.cover_medium}
                                title={track.title}
                                artist={track.artist.name}
                                getTrackInfo={getTrackInfo}
                                albumId={track.album.id}
                                artistId={track.artist.id}
                            />
                        ))}
                </div>
                {/* <div className="load-more">
          {result ? <button className="custom-button">Load More</button> : null}
        </div> */}
            </div>
        )
}


Search.propTypes = {
    getTrackInfo: PropTypes.func.isRequired,
    getSearchResult: PropTypes.func.isRequired,
    getPageTitle: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    result: state.search.searchResult,
    loading: state.search.loading,
    error: state.search.error,
});


export default connect(mapStateToProps, { getPageTitle, getSearchResult, getTrackInfo })(Search);