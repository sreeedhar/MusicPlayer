import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Albums from "./Album/Albums";
import AlbumInfo from "./Album/AlbumInfo";
import Artists from './Artist/Artists'
import ArtistInfo from "./Artist/ArtistInfo";
import TrackList from "./Songs/Tracklist";
import Top from './Top';
import Search from "./Search/Search";


export const Main = () => {
    return (
        <div className="main-container">
            <Top />
            <br />
            <Redirect to='/player/tracks' />
            <Switch>
                <Route exact path="/player/albums" component={Albums} />
                <Route exact path={`/player/albums/:albumId`} component={AlbumInfo} />
                <Route exact path="/player/artists" component={Artists} />
                <Route exact path={`/player/artists/:artistId`} component={ArtistInfo} />
                <Route exact path="/player/tracks" component={TrackList} />
                <Route exact path="/player/search" component={Search} />

            </Switch>
        </div>
    )
}

export default Main