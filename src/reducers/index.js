import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import home from './home';
import track from './track';
import search from './search'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["track", "data"],
};

export default combineReducers({
    home,
    track,
    search
});