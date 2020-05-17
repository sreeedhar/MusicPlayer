import axios from 'axios';
import { GET_PAGE_TITLE, GET_DATA, GET_DATA_FAILURE, GET_ALBUMS, GET_ARTISTS, GET_ALBUM_TRACKS, GET_ARTIST_TRACKS, GET_TRACKS, SET_ACTIVE_TRACK, START_SEARCH, SEARCH_FAILURE, SEARCH_SUCCESS, GET_ARTIST_DETAILS } from "./types";

//Get top 50 albums
export const getAlbums = () => async dispatch => {
    dispatch({ type: GET_DATA });

    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": '*',
            }
        }
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=132`, config);
        dispatch(
            {
                type: GET_ALBUMS,
                payload: res.data.albums.data
            }
        )

    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })
    }
}

//Get top 50 artists
export const getArtists = () => async dispatch => {
    dispatch({ type: GET_DATA });

    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const res = await axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=132", config);
        dispatch(
            {
                type: GET_ARTISTS,
                payload: res.data.artists.data
            }
        )

    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })
    }
}

//Get top 50 tracks
export const getTracks = () => async dispatch => {
    dispatch({ type: GET_DATA });

    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const res = await axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=132", config);
        dispatch(
            {
                type: GET_TRACKS,
                payload: res.data.tracks.data
            }
        )

    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })
    }
}

export const getAlbumTracks = (albumId) => async dispatch => {
    dispatch({ type: GET_DATA });

    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`, config);
        dispatch(
            {
                type: GET_ALBUM_TRACKS,
                payload: res.data
            }
        )

        dispatch({
            type: GET_PAGE_TITLE,
            payload: res.data.artist.name
        })

    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })
    }
}

export const getArtistDetails = (artistId) => async dispatch => {
    dispatch({ type: GET_DATA });

    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}`, config);
        dispatch(
            {
                type: GET_ARTIST_DETAILS,
                payload: res.data
            }
        )

        dispatch({
            type: GET_PAGE_TITLE,
            payload: res.data.artist.name
        })

    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })
    }
}

export const getArtistTracks = (artistId) => async dispatch => {
    dispatch({ type: GET_DATA });

    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/top?limit=50`, config);
        dispatch(
            {
                type: GET_ARTIST_TRACKS,
                payload: res.data
            }
        )

    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })
    }
}




export const getTrackInfo = (trackId) => async dispatch => {

    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${trackId}`, config);
        dispatch(
            {
                type: SET_ACTIVE_TRACK,
                payload: res.data
            }
        )


    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })
    }
}


export const getSearchResult = (text) => async dispatch => {
    dispatch({ type: START_SEARCH });

    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${text}`, config);
        dispatch(
            {
                type: SEARCH_SUCCESS,
                payload: res.data
            }
        )

        dispatch({
            type: GET_PAGE_TITLE,
            payload: `Search : ${text}`
        })


    } catch (error) {
        dispatch({
            type: SEARCH_FAILURE,
            payload: { error }
        })
    }
}

export const getPageTitle = (title) => async dispatch => {
    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        dispatch({
            type: GET_PAGE_TITLE,
            payload: title
        }
        )
    } catch (error) {
        dispatch({
            type: GET_DATA_FAILURE,
            payload: { error }
        })

    }
}