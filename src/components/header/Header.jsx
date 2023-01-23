import React from "react";

import NavBar from "../navigation/NavBar";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <a href="/" className="logo">
                    Manish
                </a>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
