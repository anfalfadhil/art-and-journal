import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Journal () {

    const [img, setImg] = useState({})
    const {imageid} = useParams();

    useEffect(() => {fetch(`hhttps://api.harvardartmuseums.org/image?apikey=d6fda28c-3901-4112-bcba-623791e4cc0a/${imageid}`)
    .then((res) => res.json())
    .then((json) => {
    setImg(json)
    })
    .catch(console.error);}, []);



    return (
        <div className='journal-container '>
            
            {/* <img className='chosen-image' src={img} /> */}
          {console.log(imageid)}
            <div className='write'>
                <h2 className='question '>So, How do you feel looking at this painting?</h2>
                <textarea className='textarea' type='textarea'></textarea>
            </div>
        </div>
    )
}

export default Journal