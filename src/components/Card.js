import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Card () {
    const [data, setData] = useState([])
     useEffect (() => { 
    axios.get('https://api.harvardartmuseums.org/image?apikey=d6fda28c-3901-4112-bcba-623791e4cc0a')
   .then( (response)=> {
     console.log(response.data.records[0].baseimageurl);
      setData(response.data.records)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
   });
 }, [])

    return(
        <div className='card-container'>
            {data.map((e) => {
                return (
                <img  src={e.baseimageurl} />)
            })}
        </div>
    )
}

export default Card