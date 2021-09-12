import React from 'react'
import NavBar from './Nav'
import { Route, Link } from "react-router-dom";

function Header () {
    return (
        <div className='header-container'>
            <h1 className='logo'>Art and Journal</h1>
            <div className='about'>
            <p >The benifits of Journaling are countless. from stress relieve, reducing anxiety, learning from experiences, improving communication skills, sleeping better, improving your memory, and even strengthening your immune system and healing injuries faster.</p>
            {/* source: https://vanillapapers.net/2020/08/09/journaling-benefits/ */}
            <p>with great benefits of art, seeing through the soul of another human being and trying to connect to their mental being and describing WHAT YOU FEEL seeing their art will help you slow down your brain waves and getting into a relaxed state. So, let's try :)</p>
            </div>
            <NavBar />
            {/* <Route path='/' component={NavBar} /> */}
        </div>
    )
}

export default Header