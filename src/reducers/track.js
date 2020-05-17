import { SET_ACTIVE_TRACK } from "../actions/types";

const initialState = {
    activeTrack: null,
    playingQueue: [],
    trackImage: null,
    trackName: "Christmas",
    trackArtist: "Ne-yo"
};


export default function (state = initialState, action) {
    const { type, payload } = action;


    switch (type) {
        case SET_ACTIVE_TRACK:
            return {
                ...state,
                activeTrack: payload,
            };
        default:
            return state;

    }



}