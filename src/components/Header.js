import React from 'react'
import NavBar from './Nav'
import { Route, Link } from "react-router-dom";

function Header () {
    return (
        <div className='header-container'>
            <h1 className='logo'>Art and Journal</h1>
            <p>About Journaling</p>

            <NavBar />
            {/* <Route path='/' component={NavBar} /> */}
        </div>
    )
}

export default Header