import React from 'react'

function Journal () {
    return (
        <div className='journal-container'>
            {/* <img className='chosen-image' src={} /> */}
            <div className='write'>
                <h2>So, How do you feel looking at this painting?</h2>
                <input className='textarea' type='textarea'></input>
            </div>
        </div>
    )
}

export default Journal