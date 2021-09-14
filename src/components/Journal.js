import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Nav'

function Journal () {

    const [img, setImg] = useState({})
    const {imageid} = useParams();
    

    useEffect (() => { 
        axios.get(`https://api.harvardartmuseums.org/image/${imageid}?apikey=d6fda28c-3901-4112-bcba-623791e4cc0a`)
       .then( (response)=> {
           console.log(response)
          setImg(response.data)
    
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
       });
     }, [])



    return (
        <div className='journal-container'>
            <NavBar />
            <h2 className='question '>So, How do you feel looking at this painting?</h2>
            <div className='creation'>
            <textarea className='textarea' type='textarea'></textarea>
            <img className='chosen-image' src={img.baseimageurl} />
            <div className='write'>
                </div>
                
            </div>
        </div>
    )
}

export default Journal