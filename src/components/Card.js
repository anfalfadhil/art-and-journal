import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom';

// const API_KEY = 'd6fda28c-3901-4112-bcba-623791e4cc0a&size=20'
function Card () {
    const [data, setData] = useState([])
    const [imageId, setImageId ] = useState()
    const api_key = process.env.REACT_APP_API_KEY;
     useEffect (() => { 
    axios.get(`https://api.harvardartmuseums.org/image?apikey=${api_key}`)
   .then( (response)=> {
      setData(response.data.records)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
   });
 }, [])

    return(
        <div className='cards-container'>
            {data.map((e) => {
              return(
               <Link to={`/img-journal/${e.imageid}`} key={e.imageid}>
                  <div className='card'>  
                    <img  src={e.baseimageurl} />
                  </div>
                </Link>
           ) })}
        </div>
    )
}

export default Card