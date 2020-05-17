import React from "react";
import Sidebar from "./Navbars/Sidebar";
import Main from "./Main";
import Footer from './Controller'

export default function Home() {
    return (
        <div className="main-app-container">
            <Sidebar />
            <Main />
            <Footer />
        </div>
    );
}
