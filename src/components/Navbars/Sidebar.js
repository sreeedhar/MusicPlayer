import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { slide as Menu } from "react-burger-menu";
import { withRouter } from "react-router-dom";
import {
    ic_person,
    ic_music_note,
    ic_album,
    ic_queue_music,
    ic_arrow_back,
    ic_search,
} from "react-icons-kit/md";


export default Sidebar => {
    return (
        <Fragment>
            <div className="navbar-container">
                <div className="top-nav">
                    <div style={{ fontColor: "white", fontWeight: 700, fontSize: 24 }} className="nav-top br4 ">
                        <img className="mw-100" src={require("../logo.gif")} />
                    </div>

                    <div className="nav-item" >
                        <NavLink style={{ fontColor: "white", fontSize: 24, fontWeight: 700 }} to="/player/artists" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_person} />
              Artists
            </NavLink>
                    </div>
                    <div className="nav-item"  >
                        <NavLink style={{ fontColor: "white", fontSize: 24, fontWeight: 700 }} to="/player/albums" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_album} />
              Albums
            </NavLink>
                    </div>
                    <div className="nav-item"  >
                        <NavLink style={{ fontColor: "white", fontSize: 24, fontWeight: 700 }} to="/player/tracks" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_music_note} />
              Tracks
            </NavLink>
                    </div>
                    <div className="nav-item" >
                        <NavLink style={{ fontColor: "white", fontSize: 24, fontWeight: 700 }} to="/player/search" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_search} />
              Search
            </NavLink>
                    </div>
                </div>
            </div>


            <div className="mobile-menu">
                <Menu width={229}>
                    <div className="nav-item">
                        <span className="nav-title">LIBRARY</span>
                    </div>
                    <div className="nav-item">
                        <NavLink style={{ fontColor: "white", fontSize: 24, fonrWeight: 500 }} to="/player/artists" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_person} />
                Artists
              </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink style={{ fontColor: "white", fontSize: 24, fonrWeight: 500 }} to="/player/albums" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_album} />
                Albums
              </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink style={{ fontColor: "white", fontSize: 24, fonrWeight: 500 }} to="/player/tracks" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_music_note} />
                Tracks
              </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink style={{ fontColor: "white", fontSize: 24, fonrWeight: 500 }} to="/player/search" activeClassName="active">
                            <Icon className="nav-icon" icon={ic_search} />
                Search
              </NavLink>
                    </div>
                </Menu>
            </div>
        </Fragment>
    );
};