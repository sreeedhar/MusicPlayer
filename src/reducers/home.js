import { GET_PAGE_TITLE, GET_DATA, GET_DATA_FAILURE, GET_ALBUMS, GET_ARTISTS, GET_ALBUM_TRACKS, GET_ARTIST_TRACKS, GET_TRACKS, GET_ARTIST_DETAILS } from "../actions/types";

const initialState = {
    title: "",
    loading: false,
    albums: null,
    tracks: null,
    playlists: null,
    artists: null,
    album: [],
    artist: null,
    playlist: [],
    error: null,
    artistTracks: []
};


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PAGE_TITLE: return {
            ...state,
            title: payload,
        };

        case GET_DATA:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case GET_ALBUMS:
            return {
                ...state,
                loading: false,
                albums: payload,
            };
        case GET_ARTISTS:
            return {
                ...state,
                loading: false,
                artists: payload,
            };
        case GET_TRACKS:
            return {
                ...state,
                loading: false,
                tracks: payload,
            };
        case GET_ALBUM_TRACKS:
            return {
                ...state,
                loading: false,
                album: payload,
            };
        case GET_ARTIST_TRACKS:
            return {
                ...state,
                loading: false,
                artistTracks: [payload]
            };

        case GET_ARTIST_DETAILS:
            return {
                ...state,
                loading: false,
                artist: payload,
            };

        default:
            return state;



    }
}
