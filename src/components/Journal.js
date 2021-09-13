import React from 'react'

function Journal () {
    return (
        <div className='journal-container '>

            {/* <img className='chosen-image' src={} /> */}
            <div className='write'>
     
                <h2 className='question '>So, How do you feel looking at this painting?</h2>
                <textarea className='textarea' type='textarea'></textarea>
            </div>
        </div>
    )
}

export default Journal