import React from "react";
import { Route, Link } from "react-router-dom";

function NavBar () {
    return (
        <div className='home'>
            <Link className="home-link" to='/' >Home</Link>
         
        </div>
    )
}
export default NavBar