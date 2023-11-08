import React from 'react';
import './header.css';
import { Link } from "react-router-dom"



function Header() {
    return (
        <header>
            <div id="logo-header"><Link to='/'><img src={"/banner_for_kory.png"} alt="banner Lease Bound" /></Link></div>

        </header>

    )
}

export default Header

