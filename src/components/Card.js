import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Journal from './Journal';
import { Route, Link } from 'react-router-dom';

function Card () {
    const [data, setData] = useState([])
    const [imageId, setImageId ] = useState()

     useEffect (() => { 
    axios.get('https://api.harvardartmuseums.org/image?apikey=d6fda28c-3901-4112-bcba-623791e4cc0a')
   .then( (response)=> {
     console.log(response.data.records[0].baseimageurl);
      setData(response.data.records)
      console.log(response.data.records)
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
              {console.log(e.imageid)}
               <Link to={`/img-journal/${e.imageid}`} key={e.imageid}>
                return (
                  <div className='card'>  
                    <img  src={e.baseimageurl} />
                    <Route 
                    path="/img-journal/:imageid" 
                    render = { () => <Journal  id={e.imageid} />}
                    />
                  </div>
                )
                
                </Link>
            })}
        </div>
    )
}

export default Card