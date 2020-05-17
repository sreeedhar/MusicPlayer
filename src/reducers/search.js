import { SEARCH_FAILURE, SEARCH_SUCCESS, START_SEARCH } from "../actions/types";


const initialState = {
    loading: false,
    error: null,
    searchResult: null,
};


export default function (state = initialState, action) {
    const { type, payload } = action;


    switch (type) {
        case START_SEARCH:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                searchResult: action.payload,
            };
        default:
            return state;

    }



}