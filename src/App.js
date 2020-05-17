import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import { getAlbums, getArtists, getTracks } from './actions/home';
import Home from './components/Home'

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Home />
            </Router>
        </Provider>

    )
}

export default App;